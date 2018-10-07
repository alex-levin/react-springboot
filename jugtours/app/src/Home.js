import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/groups">Manage JUG Tour</Link></Button>
        </Container>
      </div>
    );
  }
}

/*
Wokaround for Firefox https://stackoverflow.com/questions/51665178/link-of-react-router-dom-is-not-working-in-firefox/51665318
class Home extends Component {
    handleClick = () => {
        this.props.history.push('/groups');
    };    
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link" onClick={this.handleClick}>Manage JUG Tour</Button>
        </Container>
      </div>
    );
  }
}
*/

export default Home;