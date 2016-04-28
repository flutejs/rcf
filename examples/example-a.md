## code



```html
<div id="react-content"></div>
```

```js
import React from 'react';
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

const B = props => <div>
  
  B:
  
  {props.a} 

</div>


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
