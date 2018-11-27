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

var randcolor1 = getRandomColor()
var randcolor2 = getRandomColor()
var randcolor3 = getRandomColor()
var randcolor4 = getRandomColor()
var randcolor5 = getRandomColor()

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Today's color fortune is: </p>
          <div class="row">
            <a href={`https://www.color-hex.com/color/${randcolor1.slice(1)}` } target="blank">
              <div class="column" style={{backgroundColor: randcolor1}} >
                {randcolor1}
              </div>
            </a>

            <a href={`https://www.color-hex.com/color/${randcolor2.slice(1)}`} target="blank">
              <div class="column" style={{backgroundColor: randcolor2}} >
                {randcolor2}
              </div>
            </a>

            <a href={`https://www.color-hex.com/color/${randcolor3.slice(1)}`} target="blank">
              <div class="column" style={{backgroundColor: randcolor3}} >
                {randcolor3}
              </div>
            </a>

            <a href={`https://www.color-hex.com/color/${randcolor4.slice(1)}`} target="blank">
              <div class="column" style={{backgroundColor: randcolor4}} >
                {randcolor4}
              </div>
            </a>

            <a href={`https://www.color-hex.com/color/${randcolor5.slice(1)}`} target="blank">
              <div class="column" style={{backgroundColor: randcolor5}} >
                {randcolor5}
              </div>
            </a>
          </div>

          <div class="footer">
            Experiment by <a href="http://leiac.me" target="blank">Leia Chang</a>.
          </div>

        </header>
      </div>
    );
  }
}

export default App;
