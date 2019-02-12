import React, { Component } from 'react';
import store from './ducks/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>{routes}</div>      
      </Router>      
      </Provider>
    );
  }
}

export default App;
