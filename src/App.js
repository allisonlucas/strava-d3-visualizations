import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Strava Data Visualizations
          </p>
          <Map />
        </header>
      </div>
    );
  }
}

export default App;
