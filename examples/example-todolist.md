## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { set, remove } from 'immutable-data';
import Rcf from 'index.js';


const store = {
  todolist: { 
    list: [{
      text: 'task 1',
      completed: true,
    }],
    add(text, e) {
      return {
        list: [...e.store.list, {
          text,
          completed: false,
        }],
      };
    },
    del(todo, e) {
      const index = e.store.list.indexOf(todo);
      return {
        list: remove(e.store.list, index),
      };
    },
    change(todo, e) {
      const index = e.store.list.indexOf(todo);
      return {
        list: set(e.store.list, {
          [`${index}.completed`]: !e.store.list[index].completed,
        }),
      };
    },
    filter: 'all',
    changeFilter(filter) {
      return {
        filter,
      };
    },
  },
};


const TodoList = ({ todolist }) => {
  const { change, del, add, filter, list, changeFilter } = todolist;
  let filterList;
  switch (filter) {
    case "all":
      filterList = list;
      break;
    case "completed":
      filterList = list.filter(todo => todo.completed);
      break;
    case "active":
      filterList = list.filter(todo => !todo.completed);
      break;
    default:
      break;
  }
  const todoProps = { change, del };
  const addTodoProps = { add };
  const footerProps = { filter, changeFilter };
  return <div>
    <ul>
      {
        filterList.map((todo,index)=>
          <Todo key={index} todo={todo} {...todoProps} />
        )
      }
    </ul>
    <AddTodo {...addTodoProps} />
    <Footer {...footerProps} />
  </div>;
}


const Todo = ({ todo, change, del }) => {
  return <li>
    <span onClick={() => change(todo)} className={todo.completed ? 'completed' : 'not-completed'}>
      {todo.text} 
    </span>
    <span onClick={() => del(todo)} className='del'>x</span>
  </li> 
}


class AddTodo extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const node = ReactDOM.findDOMNode(this.refs.input);
    const text = node.value.trim()
    if (!text){
      return;
    }
    this.props.add(text);
    node.value = ""
  }
  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type='text' ref='input' />
      <button type="submit">
        Add
      </button>
    </form>;
  }
}


const Footer = ({ filter, changeFilter }) => <div>
  <div>current:{filter}</div>
  <button onClick={() => changeFilter('all')}>all</button>
  <button onClick={() => changeFilter('active')}>active</button>
  <button onClick={() => changeFilter('completed')}>completed</button>
</div>;


ReactDOM.render(<Rcf store={store}>
  <TodoList />
</Rcf>,
document.getElementById('react-content'));
```

```css
.completed {
  text-decoration: line-through;
  cursor: pointer;
}
.not-completed {
  text-decoration: none;
  cursor: pointer;
}
.del {
  margin-left: 20px;
  cursor: pointer;
}
```
