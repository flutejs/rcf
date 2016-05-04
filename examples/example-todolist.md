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



function selectTodos(todos, filter) {
  switch (filter) {
  case "all":
    return todos;
  case "completed":
    return todos.filter(todo => todo.completed);
  case "active":
    return todos.filter(todo => !todo.completed);
  }
}



class TodoList extends Component {
  render() {  
    const { change, del, add, filter, changeFilter } = this.props.todolist;
    const list = selectTodos(this.props.todolist.list, filter);
    const todoProps = { change, del };
    const addTodoProps = { add };
    const footerProps = { filter, changeFilter };
    return <div>
      <ul>
        {
          list.map((todo,index)=>
            <Todo key={index} todo={todo} {...todoProps} />
          )
        }
      </ul>
      <AddTodo {...addTodoProps} />
      <Footer {...footerProps} />
    </div>;
  }
}


class Todo extends Component {
  handleChange = () => {
    this.props.change(this.props.todo);
  }
  handleDel = () => {
    this.props.del(this.props.todo);
  }
  render() {
    const todo = this.props.todo;
    return <li>
      <span onClick={this.handleChange} className={todo.completed ? 'completed' : 'not-completed'}>
        {todo.text} 
      </span>
      <span onClick={this.handleDel} className='del'>x</span>
    </li>
  }  
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

class Footer extends Component {
  render() {
    return <div>
        
      <div>current:{this.props.filter}</div>

      <a href="#" onClick={() => this.props.changeFilter('all')}>all</a>
      {' '}
      <a href="#" onClick={() => this.props.changeFilter('active')}>active</a>
      {' '}
      <a href="#" onClick={() => this.props.changeFilter('completed')}>completed</a>

    </div>;
  }
}


ReactDOM.render(<div>
  
  <Rcf store={store}>
    <TodoList />
  </Rcf>

</div>, 

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
