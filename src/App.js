import React, { Component } from 'react';
import './App.css';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Today's color fortune is: </p>
          <div class="row">
            <div class="column" style={{backgroundColor: getRandomColor()}} >
            </div>

            <div class="column" style={{backgroundColor: getRandomColor()}} >
            </div>

            <div class="column" style={{backgroundColor: getRandomColor()}} >
            </div>

            <div class="column" style={{backgroundColor: getRandomColor()}} >
            </div>

            <div class="column" style={{backgroundColor: getRandomColor()}} >
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
