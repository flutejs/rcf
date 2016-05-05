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

let ID = 0;
const LIST = [];
const SIZE = 10000;
for(let i=0;i < SIZE; i++) {
  LIST.push({
    text: 'task ' + i,
    completed: false,
    id: ID++,
  });
}

const store = {
  todolist: { 
    list: LIST,
    add(text, e) {
      return {
        list: [{
          text,
          completed: false,
          id: ID++,
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
    edit(todo, text, e) {
      const index = e.store.list.indexOf(todo);
      return {
        list: set(e.store.list, {
          [`${index}.text`]: text,
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
      const activeTodosCount = getActiveTodosCount(e.store.list);
      if (activeTodosCount === 0 || e.store.list.length === activeTodosCount) {
        return {
          list: e.store.list.map(todo => ({
            ...todo,
            completed: !todo.completed,
          })),
        };
      }
      return {
        list: e.store.list.map(todo => todo.completed ? todo : {
          ...todo,
          completed: true,
        }),
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
  const { change, del, add, filter, list, changeFilter, clearCompleted, toggle, edit } = todolist;
  let filterList = getVisibleTodos({
    list,
    filter,
  });
  const todoProps = { change, del, edit };
  const footerProps = { list, filter, changeFilter, clearCompleted };
  const toggleAllProps = { list, toggle };
  return <div className="todoapp">
    <header className="header">
      <h1>todos</h1>
    </header>
    <TodoInput
      type='new-todo'
      onSave={text => add(text)}
     />
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
  constructor(props) {
    super(props)
    this.state = {
      type: 'text',
    };
  }
  handleDoubleClick = () => {
    this.setState({ 
      type: 'edit',
    });
  }
  handleSave = text => {
    this.props.edit(this.props.todo, text)
    this.setState({ 
      type: 'text',
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo !== this.props.todo || nextState.type !== this.state.type;
  }
  render() {
    const { todo, change, del, edit } = this.props;
    return <li className={classnames({
        completed: todo.completed,
      })}>

      {
        this.state.type === 'edit' ?

        <TodoInput
          text={todo.text}
          type="edit-todo"
          onSave={this.handleSave}
        />

        :

        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => change(todo)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={() => del(todo)} />
        </div>

      }

    </li>;
  }

}


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '' || props.text,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.text !== nextState.text;
  }
  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  }
  handleSubmit = e => {
    e.preventDefault()
    const text = this.state.text;
    if (!text){
      return;
    }
    this.props.onSave(text);
    if (this.props.type === 'new-todo') {
      this.setState({
        text: '',
      });
    }
  }
  handleBlur = e => {
    if (this.props.type === 'edit-todo') {
      const text = this.state.text;
      this.props.onSave(text);
    }
  }
  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text"
        className="new-todo"
        autoFocus="true"
        placeholder="What needs to be done?"
        value={this.state.text}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
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


const ToggleAll = ({ list, toggle }) => {
  const completedCount = list.length - getActiveTodosCount(list);
  return list.length > 0 ? <input
    className="toggle-all"
    type="checkbox"
    checked={completedCount === list.length}
    onChange={() => toggle()}
  /> : <span />;
}



ReactDOM.render(<Rcf store={store}>
  <TodoList />
</Rcf>,
document.getElementById('react-content'));
```
