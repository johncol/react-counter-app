import React, { Component } from 'react';

import './counter.css';

class Counter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onUpdateCounter(this.props.counter, 1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onUpdateCounter(this.props.counter, -1)}
          className="btn btn-secondary btn-sm"
          disabled={this.props.counter.value === 0}
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDeleteCounter(this.props.counter)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
        <span style={{ opacity: 0.9 }} className={this.getBadgeClasses()}>
          {this.getCount()}
        </span>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = 'm-2 badge badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  getCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };
}

export default Counter;
