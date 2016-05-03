## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';


class A extends Component {
  handleClickStore1 = () => {
    const store1 = this.props.store1;
    store1.setStore({
      a: store1.a - 2,
    });
  }
  handleClickStore2 = () => {
    const store2 = this.props.store2;
    store2.setStore({
      a: store2.a - 2,
    });
  }
  render() {
    return <div>

      A:

      <button onClick={this.handleClickStore1}>
        store1
      </button>

      <button onClick={this.handleClickStore2}>
        store2
      </button>

    </div>;
  }

}


class B extends Component {
  render() {
    return <div>
  
      B:
      
      <div>
        store1.a {this.props.store1.a}
      </div>

      <div>
        store2.a {this.props.store2.a}
      </div>

    </div>;
  }

}


const store = {
  store1: {
    a: 1,
  },
  store2: {
    a: 2,
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

document.getElementById('react-content'));

```
