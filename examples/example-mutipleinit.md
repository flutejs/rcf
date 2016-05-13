## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';


class User extends Component {
  render() {
    return <div> 
      <p>name: {this.props.name}</p>
      <p>age: {this.props.age}</p>
    </div>;
  }
}


class MyComponent extends Component {
  render() {
    return <li>
        <User {...this.props.user} />
    </li>;
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.list = props.list || [{
      name: 'lily',
      age: 18,
    }, {
      name: 'jack',
      age: 17,
    }];
  }
  render() {
    

    return <ul>
      {
        this.list.map((item, index) => 
          <Rcf store={{ user: item }} key={index}>
            <MyComponent />
          </Rcf>
        )
      }
    </ul>;

  }
}


ReactDOM.render(<App />, 

document.getElementById('react-content'));

```

```css
.rcf{
  margin: 20px;
  border: 1px solid gray;
}
```
