# Rcf

[![NPM version](https://img.shields.io/npm/v/rcf.svg?style=flat)](https://npmjs.org/package/rcf)

Rcf-x is a react component, it uses a clear and simple way to manage store.

Put your component in Rcf and Rcf allows it to get store by "this.props.storeName.*"


## store

The store is a plain object which can only be modified by function in store. If the type of the value is a function, it  will return a plain object or a promise,

```js
const store = {
  store1: {
    a: 1,
    b: 1,
      minus: (step, e) => ({
        a: e.store.a - step
      }),
  },
  store2: {
    a: 2,
    minus: (step, e) => new Promise(resolve => {
        setTimeout(() => resolve({
           a: e.store.a - step,
        }), 1000);
    }),
  }
};
```

or you can use e.setStore to handel async callback,

```js
const store = {
  store1: {
    a: 1,
      minus: (step, e) => {
      setTimeout(() => {
        e.setStore({
          a: e.store.a - step,  
        });
      }, 1000);
      },
  },
  store2: {
    a: 2,
  }
};
```

As you see, the last argument is an Event, which has properties:

- store: Plain object

- setStore: Function

- target: React element


There's a default function 'setStore' in store object. If you define a store:

```js
const store = {
  store1: {},
};
``` 

Rcf will transform it to

```js
const store = {
  store1: {
    setStore: obj => obj,
  },
};
```

So you can use "this.props.store1.setStore" in simple app.

http://flutejs.github.io/rcf/examples/example-simple.html

## Install


```
npm install rcf
```


## Example

http://flutejs.github.io/rcf/

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'rcf';


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


const store = {
  store1: {
    a: 1,
    minus: (step, e) => ({
      a: e.store.a - step
    })
  },
};

ReactDOM.render(<div>
  
  <Rcf store={store}>
    <A />
    <B />
  </Rcf>
  
  <Rcf store={store}>
    <B />
  </Rcf>

</div>, 

mountDom);

```

http://flutejs.github.io/rcf/examples/example-sync.html


## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>store</td>
          <td>object</td>
          <td>plain object</td>
        </tr>
        <tr>
          <td>tag</td>
            <td>string | object</td>
          <td>default is 'div', the root element
When the number of children is greater than 1, set root element to tag</td>
        </tr>
 
    </tbody>
</table>
