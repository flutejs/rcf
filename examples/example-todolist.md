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
    getFilterList(e) {
      switch (e.store.filter) {
      case "all":
        return e.store.list;
      case "completed":
        return e.store..filter(todo => todo.completed);
      case "active":
        return e.store..filter(todo => !todo.completed);
      }
    },
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


class TodoList extends Component {
  render() {  
    const { change, del, add, filter, changeFilter, getFilterList } = this.props.todolist;
    const list = getFilterList();
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
  render() {
    const todo = this.props.todo;
    return <li>
      <span onClick={() => this.props.change(this.props.todo)} className={todo.completed ? 'completed' : 'not-completed'}>
        {todo.text} 
      </span>
      <span onClick={() => this.props.del(this.props.todo)} className='del'>x</span>
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
      <button onClick={() => this.props.changeFilter('all')}>all</button>
      <button onClick={() => this.props.changeFilter('active')}>active</button>
      <button onClick={() => this.props.changeFilter('completed')}>completed</button>
    </div>;
  }
}


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
