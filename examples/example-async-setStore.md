## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';

class A extends Component {
  handleClick = () => {
    this.props.store1.asyncMinus(2);
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
    asyncMinus: (step, e) => {
      setTimeout(() => {
        e.setStore({
          a: e.store.a - step,
        });
      }, 1000);
    },
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
