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
    this.props.set({
      a: this.props.a - 1,
    });
  }
  render() {
    return <div>

      A:

      {this.props.a}

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
      
      {this.props.a} 

    </div>;
  }

}


const store = {a: 1};

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
