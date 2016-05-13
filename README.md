# Rcf

[![NPM version](https://img.shields.io/npm/v/rcf.svg?style=flat)](https://npmjs.org/package/rcf)

Rcf is a react component, it uses a clear and simple way to manage store.

Put your component in Rcf and Rcf allows it to get store by "this.props.storeName.*".The components in Rcf can share the same store and when the store changes, they will be re rendered.

## Let's start it !

UserStore.js
```javascript
const UserStore = {
  name: 'lily',
  age: '18',
};
export default UserStore;
```

User.js
```javascript
import React, { Component } from 'react';
class User extends Component {
  render() {
    return <div>
    name: {this.props.user.name}
    age: {this.props.user.age}
  </div>;
  }
}
export default User;
```

Age.js
```javascript
import React, { Component } from 'react';
class Age extends Component {
  render() {
    return <div>
    age: {this.props.user.age}
    <button onClick={() => this.props.user.setStore({age: this.props.user.age - 1})}>click</button>
  </div>;
  }
}
export default Age;
```

App.js
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import userStore from './userStore';
import User from './User';
import Age from './Age';

class App extends Component {
  render() {
  const store = {
    user: userStore,
  };
  return <div>
    <Rcf store={store}>
      Put User in Rcf.
      <User />
    </Rcf>

    <Rcf store={store}>
      Put Age in Rcf.
      <Age />
    </Rcf>
    
    <Rcf store={store}>
      You can put them in Rcf too.
      <User />
      <Age />
    </Rcf>
    </div>
  }
}

ReactDOM.render(<App />, mountDom);
```

You can see this example here: http://flutejs.github.io/rcf/examples/example-index.html


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

## Example

http://flutejs.github.io/rcf/

## Install

```
npm install rcf
```

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
      <td>default is 'div', the root element When the number of children is greater than 1, set root element to tag</td>
    </tr>
  </tbody>
</table>
