import WeakMap from 'es6-weak-map';

const container = new WeakMap();

const get = (store) => container.get(store);

const set = (store, obj) => container.set(store, obj);

const del = (store) => container.delete(store);

export { get, set, del };
