import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import { createStore, delStore } from './store';


class Rcf extends Component {

  static defaultProps = {
    tag: 'div',
  };

  static propTypes = {
    tag: PropTypes.any,
    store: PropTypes.object.isRequired,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.store = createStore(props.store, this.update);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.store !== this.props.store) {
      delStore(this.props.store, this.update);
      this.store = createStore(nextProps.store, this.update);
    }
  }

  componentWillUnmount() {
    delStore(this.props.store, this.update);
  }

  update = () => {
    this.forceUpdate();
  }

  render() {
    const array = Children.map(this.props.children, child => (
      isValidElement(child) ? cloneElement(child, {
        ...this.store,
      }) : child));
    if (!array) {
      return null;
    }
    if (array.length === 1 && isValidElement(array[0])) {
      return array[0];
    }
    const R = this.props.tag;
    return <R {...this.props}>{array}</R>;
  }
}

export default Rcf;
