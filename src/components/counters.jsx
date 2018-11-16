import React, { Component } from 'react';

import Counter from './counter';

const Counters = props => {
  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={props.onResetCounter}>
        Reset
      </button>

      {props.counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDeleteCounter={props.onDeleteCounter}
          onUpdateCounter={props.onUpdateCounter}
        />
      ))}
    </div>
  );
};

export default Counters;
