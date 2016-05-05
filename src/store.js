import assign from 'object-assign';
import isPlainObject from 'is-plain-object';
import isPromise from 'is-promise';
import { get, set, del } from './container';


const setStore = (store, obj) => {
  const cache = get(store);
  if (cache) {
    assign(cache.store, obj);
    cache.list.forEach(update => update());
  }
};

const transformStore = (store, target) => {
  const map = {};
  const event = {
    target,
    store: map,
    setStore: obj => setStore(store, obj),
  };
  const mergeStore = {
    setStore: obj => obj,
    ...store,
  };
  for (const key in mergeStore) {
    const item = mergeStore[key];
    map[key] = typeof item === 'function' ? function () {
      const obj = item(...arguments, event);
      if (isPromise(obj)) {
        obj.then(value => event.setStore(value));
      } else if (isPlainObject(obj)) {
        event.setStore(obj);
      }
    } : item;
  }
  return map;
};

const createStore = (store, update, target) => {
  const map = {};
  for (const name in store) {
    const obj = store[name];
    if (Object.freeze) {
      Object.freeze(obj);
    }
    let cache = get(obj);
    if (cache) {
      cache.list.push(update);
    } else {
      cache = {
        list: [update],
        store: transformStore(obj, target),
      };
      set(obj, cache);
    }
    map[name] = cache.store;
  }
  return map;
};

const delStore = (store, update) => {
  for (const name in store) {
    const obj = store[name];
    const cache = get(obj);
    if (cache) {
      const list = cache.list.filter(item => item !== update);
      if (list.length > 0) {
        cache.list = list;
      } else {
        del(cache);
      }
    }
  }
};


export default { createStore, setStore, delStore, transformStore };
