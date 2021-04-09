import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateMemories from './components/CreateMemory';
import ShowMemoryList from './components/ShowMemoryList';
import showMemoryDetails from './components/ShowMemoriesDetails';
import UpdatememoryInfo from './components/UpdateMemoriesInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowMemoryList} />
          <Route path='/create-memories' component={CreateMemories} />
          <Route path='/edit-memories/:id' component={UpdatememoryInfo} />
          <Route path='/show-memories/:id' component={showMemoryDetails} />
        </div>
      </Router>
    );
  }
}

export default App;