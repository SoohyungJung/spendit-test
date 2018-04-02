import React from 'react';
import MainCalendar from './MainCalendar';
import '../styles/App.css'

class App extends React.Component {

  render() {

    return (
      <div>
        <h1 className="title">Spendit Test</h1>
        <MainCalendar />
      </div>
    );
  }
}

export default App;
