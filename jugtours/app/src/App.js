/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  // async is es2017-es8 new keyword. Everything returned from this function
  // is wrapped in a resolved promise. Promises are part of es2015-es6 and now
  // are natively supported by all browsers and node.
  /* Promise example
  Promise has a then function that is given a function which is called by the promise
  when the promise is resolved.
  fetchRides().then(rides => {
    //process rides
  });
  function fetchRides() {
      return new Promise() ((resolve, reject) => {
          // get rides from server e.g with XmlHttpRequest
          // we call resolve when rides successfuly retrieved
          resolve(rides);
          // if error
          reject(errorInfo);
      });
  };
  componentDidMount is a lifecysle hook that runs after the component output has been rendered to the DOM:
  https://reactjs.org/docs/state-and-lifecycle.html
  await - keyword to add to a call to a function that returns a promise
  Only works inside of an async function
  It makes sure the promise is done before continuing the async function.
  Fetch API - es6+ - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  
  async componentDidMount() {
    const response = await fetch('/api/groups');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const { groups, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>JUG List</h2>
          {groups.map(group =>
            <div key={group.id}>
              {group.name}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
*/


import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' component={GroupEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;