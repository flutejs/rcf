## code



```html
<div id="react-content"></div>
```

```js
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';

class A extends Component {
  static contextTypes = {
    a: PropTypes.any,
    set: PropTypes.any,
  }
  onClick() {
    this.context.set({
      a: this.context.a - 1,
    });
  }
  render() {
    return <div>
      this.context.a: {this.context.a}
      <button onClick={::this.onClick}>A</button>
    </div>;
  }
}

const obj = {
  a: 1
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    }
  }
  onClick() {
    const a = this.state.a;
    this.setState({
      a: a - 1,
    });
  }
  render() {
    return <div>
      <Rcf context={obj}>
        <A />
      </Rcf>
      <Rcf context={obj}>
        <A />
      </Rcf>
      this.state.a: {this.state.a}
      <button onClick={::this.onClick}>App</button>
    </div>;
  }
}

ReactDOM.render(<App />
  ,
document.getElementById('react-content'));

```
