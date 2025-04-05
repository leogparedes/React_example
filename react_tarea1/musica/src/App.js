
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';

class App extends Component {
  componentDidMount() {
    console.log("La app se ha cargado correctamente 🎵");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="song-list">
          <Song title="Shape of You" artist="Ed Sheeran" duration="4:24" />
          <Song title="Blinding Lights" artist="The Weeknd" duration="3:20" />
          <Song title="Bohemian Rhapsody" artist="Queen" duration="5:55" />
        </div>
      </div>
    );
  }
}

export default App;

