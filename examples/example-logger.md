## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import isPromise from 'is-promise';
import Rcf from 'index.js';

class A extends Component {
  handleClick = () => {
    this.props.store1.minus(2);
  }
  render() {
    return <div>

      A:

      {this.props.store1.a}

      <button onClick={this.handleClick}>
        click
      </button>

    </div>;
  }

}


class B extends Component {
  render() {
    return <div>
  
      B:
      
      {this.props.store1.a} 

    </div>;
  }

}


const logger = store => {
  const map = {};
  for (const name in store) {
    map[name] = {};
    const obj = store[name];
    for (const key in obj){
      const item = obj[key];
      map[name][key] = typeof item === 'function' ? function() {
          const e = arguments[arguments.length - 1];
          const setStore = e.setStore;
          e.setStore = obj => {
            console.log(e.target);
            console.log(name + ' ' + key);
            console.log(e.store);
            setStore(obj);
            console.log(e.store);
          };
          return item(...arguments);
        } : item;
    }
  }
  return map;
}

let store = {
  store1: {
    a: 1,
    minus: (step, e) => ({
      a: e.store.a - step,
    }),
  },
};

store = logger(store);

ReactDOM.render(<div>
  
  <Rcf store={store}>
    <A />
    <B />
  </Rcf>
  
  <Rcf store={store}>
    <B />
  </Rcf>

</div>, 

document.getElementById('react-content'));

```
