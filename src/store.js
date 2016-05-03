import assign from 'object-assign';
import isPlainObject from 'is-plain-object';
import isPromise from 'is-promise';
import { get, set, del } from './container';

const createStore = (store, update) => {
  for (const name in store) {
    const obj = store[name];
    const list = get(obj);
    if (list) {
      list.push(update);
    } else {
      set(obj, [update]);
    }
  }
};

const setStore = (store, obj) => {
  const list = get(store);
  if (list) {
    assign(store, obj);
    list.forEach(update => update());
  }
};

const delStore = (store, update) => {
  for (const name in store) {
    const obj = store[name];
    const list = get(obj);
    if (list) {
      const array = list.filter(item => item !== update);
      if (array.length >= 0) {
        set(obj, array);
      } else {
        del(obj);
      }
    }
  }
};

const transformStore = (storeMap, target) => {
  const map = {};
  for (const name in storeMap) {
    map[name] = {};
    const store = storeMap[name];
    const event = {
      target,
      store,
      setStore: obj => setStore(store, obj),
    };

    // default function 'set'
    store.setStore = store.setStore || (obj => obj);

    for (const key in store) {
      const item = store[key];
      map[name][key] = typeof item === 'function' ? function () {
        const obj = item(...arguments, event);
        if (isPromise(obj)) {
          obj.then(value => event.setStore(value));
        } else if (isPlainObject(obj)) {
          event.setStore(obj);
        }
      } : item;
    }
  }
  return map;
};


export default { createStore, setStore, delStore, transformStore };
