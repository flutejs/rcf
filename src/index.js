import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import assign from 'object-assign';
import { get, set, del } from './container';


class Rcf extends Component {

  static defaultProps = {
    tag: 'div',
    set: 'set',
  };

  static propTypes = {
    tag: PropTypes.any,
    set: PropTypes.string,
    store: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const list = get(props.store);
    if (list) {
      list.push(this.update);
    } else {
      set(props.store, [this.update]);
    }
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  componentWillUnmount() {
    const list = get(this.props.store);
    if (list) {
      const array = list.filter(item => item !== this.update);
      if (array.length >=0 ) {
        set(this.props.store, array);
      } else {
        del(this.props.store);
      }
    }
  }

  set = store => {
    assign(this.props.store, store);
    const list = get(this.props.store);
    if (list) {
      list.forEach(item => item());
    }
  }

  update = () => {
    this.forceUpdate();
  }

  render() {  
    const array = Children.map(this.props.children, child => isValidElement(child) ? cloneElement(child, {
      ...this.props.store,
      [this.props.set]: this.set,
    }) : child);
    if (!array) {
      return null;
    }
    if (array.length === 1) {
      return array[0];
    }
    const R = this.props.tag;
    return <R {...this.props}>{array}</R>; 
  }
}


export default Rcf;
