## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';


const UserStore = {
  name: 'lily',
  age: '18',
};


class User extends Component {
  render() {
    return <div>
      <p>name: {this.props.user.name}</p>
      <p>age: {this.props.user.age}</p>
    </div>;
  }
}


class Age extends Component {
  render() {
    return <div>
      age: {this.props.user.age}
      <button onClick={() => this.props.user.setStore({
        age: this.props.user.age - 1,
      })}>click</button>
    </div>;
  }
}


class App extends Component {
  render() {
    const store = {
      user: UserStore,
    };
    return <div>
      
      <Rcf store={store} className="rcf">
        Put User in Rcf.
        <User />
      </Rcf>

      <Rcf store={store} className="rcf">
        Put Age in Rcf.
        <Age />
      </Rcf>
      
      <Rcf store={store} className="rcf">
        You can put then in Rcf too.
        <User />
        <Age />
      </Rcf>
    </div>
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
