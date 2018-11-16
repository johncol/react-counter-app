import React, { Component } from 'react';

import './App.css';

import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 100 },
      { id: 4, value: 0 }
    ]
  };

  handleDeleteCounter = counterToDelete => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterToDelete.id
    );
    this.setState({ counters });
  };

  handleUpdateCounter = (counterToUpdate, value) => {
    const counters = this.state.counters.map(counter => {
      if (counter.id === counterToUpdate.id) {
        return { ...counter, value: counter.value + value };
      }
      return { ...counter };
    });
    this.setState({ counters });
  };

  handleResetCounter = () => {
    const counters = this.state.counters.map(counter => ({
      ...counter,
      value: 0
    }));
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          total={this.state.counters
            .map(counter => counter.value)
            .reduce((sum, value) => sum + value, 0)}
        />
        <main className="container">
          <Counters
            onDeleteCounter={this.handleDeleteCounter}
            onUpdateCounter={this.handleUpdateCounter}
            onResetCounter={this.handleResetCounter}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
