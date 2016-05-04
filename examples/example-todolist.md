## code



```html
<div id="react-content"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { set, remove } from 'immutable-data';
import 'todomvc-app-css/index.css'
import * as Perf from 'react-addons-perf';
import classnames from 'classnames';
import { createSelector } from 'reselect'
import Rcf from 'index.js';

window.perfStart = function() {
  Perf.start();
}

window.perfStop = function() {
  Perf.stop();
  Perf.printInclusive();
  Perf.printWasted();
}

let id = 0;
const list = [];
const size = 10;
for(let i=0;i < size;i++) {
  list.push({
    text: 'task ' + i,
    completed: true,
    id,
  });
  id ++;
}

const store = {
  todolist: { 
    list,
    add(text, e) {
      return {
        list: [{
          text,
          completed: false,
          id: id++,
        }, ...e.store.list],
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
    clearCompleted(e) {
      return {
        list: e.store.list.filter(item => !item.completed),
      };
    },
    toggle(e) {
      return {
        list: e.store.list.map(todo => ({
          ...todo,
          completed: !todo.completed,
        })),
      };
    }
  },
};

const getVisibleTodos = createSelector([
  obj => obj,
], ({list, filter}) => {
  switch (filter) {
    case 'all':
      return list;
    case 'active':
      return list.filter(todo => !todo.completed);
    case 'completed':
      return list.filter(todo => todo.completed);
  }
});

const getActiveTodosCount = createSelector([
  obj => obj,
], list => {
  return list.filter(t => !t.completed).length;
});


const TodoList = ({ todolist }) => {
  const { change, del, add, filter, list, changeFilter, clearCompleted, toggle } = todolist;
  let filterList = getVisibleTodos({
    list,
    filter,
  });
  const todoProps = { change, del };
  const addTodoProps = { add };
  const footerProps = { list, filter, changeFilter, clearCompleted };
  const toggleAllProps = { list, toggle };
  return <div className="todoapp">
    <header className="header">
      <h1>todos</h1>
    </header>
    <AddTodo {...addTodoProps} />
    <div className="main">
      <ToggleAll {...toggleAllProps} />
      <ul className="todo-list">
        {
          filterList.map(todo =>
            <Todo key={todo.id} todo={todo} {...todoProps} />
          )
        }
      </ul>
      <Footer {...footerProps} />
    </div>
  </div>;
};


class Todo extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.todo !== this.props.todo;
  }
  render() {
    console.log(1)
    const { todo, change, del } = this.props;
    return <li className={classnames({
        completed: todo.completed,
      })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => change(todo)} />
        <label>
          {todo.text}
        </label>
        <button className="destroy" onClick={() => del(todo)} />
      </div>
    </li>;
  }

}


class AddTodo extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }
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
      <input type="text"
        className="new-todo"
        ref="input"
        autoFocus="true"
        placeholder="What needs to be done?"
      />

    </form>;
  }
}


class Footer extends Component {
  render() {
    const { list, filter, changeFilter, clearCompleted } = this.props;
    const activeCount = getActiveTodosCount(list);
    const completedCount = list.length - activeCount;
    return <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong>
        {' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>
      <ul className="filters">
        {[ 'all', 'active', 'completed' ].map(item =>
          <li key={item}>
            <a className={classnames({ selected: item === filter })}
              style={{ cursor: 'pointer' }}
              onClick={() => changeFilter(item)}
            >
              {item}
            </a>
          </li>
        )}
      </ul>
      {
        completedCount > 0 
        &&
        <button className="clear-completed"
          onClick={() => clearCompleted()} >
          Clear completed
        </button>
      }
    </footer>;
  }
}


class ToggleAll extends Component {
  render() {
    const { list, toggle } = this.props;
    const completedCount = list.length - getActiveTodosCount(list);
    return <input
      className="toggle-all"
      type="checkbox"
      checked={completedCount === list.length}
      onChange={() => toggle()}
    />;
  }
}



ReactDOM.render(<Rcf store={store}>
  <TodoList />
</Rcf>,
document.getElementById('react-content'));
```
