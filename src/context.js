import WeakMap from 'es6-weak-map';

const container = new WeakMap();

const get = (context) => {
  return container.get(context);
};

const set = (context, list) => {
  container.set(context, list);
};

const del = (context) => {
  container.delete(context);
};

export { get, set, del };
