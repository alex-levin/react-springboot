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
This is preferable approach that works with Firefox too:
https://tylermcginnis.com/react-router-programmatically-navigate/ 
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