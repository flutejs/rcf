## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';

const A = props => <div>
  
  A: 

  {props.a} 
  
  <button onClick={() => {
    props.set({
      a: props.a - 1,
    });
  }}>
    click
  </button>

</div>



const store = {a: 1};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    }
    setInterval(()=>{
      this.setState({
        a: this.state.a - 1,
      })
    },1000);
  }

  render() {

    return <div>

      <Rcf store={store}>
        
        <A />

        this.state.a: {this.state.a}
      
      </Rcf>

    </div>

  }

}


ReactDOM.render(<App />, 

document.getElementById('react-content'));

```
