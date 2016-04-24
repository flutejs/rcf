import React, { Component, PropTypes, Children } from 'react';
import assign from 'object-assign';
import shallowequal from 'shallowequal';
import { get, set, del } from './context';


class Rcf extends Component {

  static defaultProps = {
    set: 'set',
    tag: 'div',
  };

  static propTypes = {
    context: PropTypes.object.isRequired,
    set: PropTypes.string,
    tag: PropTypes.any,
  }

  constructor(props) {
    super(props);
    const list = get(props.context);
    if (list) {
      list.push(this.set);
    } else {
      set(props.context, [this.set]);
    }
    const context = {
      ...props.context,
      [props.set]: this.update,
    };
    const childContextTypes = {};
    for (let key in context) {
      childContextTypes[key] = PropTypes.any;
    }
    class R extends Component {
      static childContextTypes = childContextTypes;
      getChildContext() {
        return context;
      }
      render() {
        const children = this.props.children;
        const count = Children.count(children);
        if (count < 2) {
          return children || null;
        }
        return React.createElement(props.tag, null, children);  
      }
    }
    this.state = {
      container: {
        context,
      },
      R,
    };
  }

  set = obj => {
    const container = this.state.container;
    const context = container.context;
    assign(context, obj);
    this.setState({
      container: {
        context,
      }
    });
  }

  update = obj => {
    const list = get(this.props.context)
    if (list) {
      list.forEach(item => {
        item(obj);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!shallowequal(nextProps.context, this.props.context)) {
      this.set(nextProps.context);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.container !== this.state.container;
  }

  componentWillUnmount() {
    const list = get(this.props.context);
    if (list) {
      const array = list.filter(item => item !== this.set);
      if (array.length >=0 ) {
        set(this.props.context, array);
      } else {
        del(this.props.context);
      }
    }
  }

  render() {
    const R = this.state.R;
    const children = this.props.children;
    return <R>{children}</R>;
  }
}


export default Rcf;
