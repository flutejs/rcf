## code



```html
<div id="react-content"></div>
```

```js
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Rcf from 'index.js';



// TodoList.jsx

const TodoList = (props, context) => 

<div>
  {
    context.list.map(item => 
      <Rcf context={item}>
        <Todo />
      </Rcf>
    )
  }
  <AddTodo />
  <Footer />
</div>

TodoList.contextTypes = {
  list: PropTypes.array,
};



// Todo.jsx

const Todo = (props, context) => 

<div style={{
  textDecoration: context.completed ? 'line-through' : 'none',
  cursor:'pointer'
  }} onClick={() => {
    handleTodoClick(context);
  }}>

  {context.text}

</div>

Todo.contextTypes = {
  set: PropTypes.func,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

const handleTodoClick = (context) => {
  context.set({
    ...context,
    completed: !context.completed,
  });
};



// AddTodo.jsx

const AddTodo = (props, context) => 

<form onSubmit={e => {
  e.preventDefault();
  const node = document.querySelector('input', e.target);
  const text = node.value.trim()
  if (!text){
    return;
  }
  handleAddTodoSubmit(context, text);
  node.value = '';
  node.focus();
}}>
  <input type='text' />
  <button type="submit">
    Add
  </button>
</form>

AddTodo.contextTypes = {
  set: PropTypes.func,
  list: PropTypes.array,
};

const handleAddTodoSubmit = (context, text) => {
  context.set({
    list: [...context.list, {
      text,
      completed: false,
    }],
  });
};



// Footer.jsx

const Footer = (props, context) => 

<div>

  all
  active
  completed

</div>

Footer.contextTypes = {
  list: PropTypes.array,
};



// App.jsx

const context = {
  list: [{
    text:'todo1',
    completed: true,
  }],
};

const App = () => <Rcf context={context}>
  <TodoList />
</Rcf>

ReactDOM.render(<App />
  ,
document.getElementById('react-content'));

```
