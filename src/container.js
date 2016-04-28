import WeakMap from 'es6-weak-map';

const container = new WeakMap();

const get = (store) => {
  return container.get(store);
};

const set = (store, list) => {
  container.set(store, list);
};

const del = (store) => {
  container.delete(store);
};

export { get, set, del };
