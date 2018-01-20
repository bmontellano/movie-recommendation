import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Home from './components/Home/Home';
import logo from './logo.svg';
import './App.css';

import {Navbar, NavItem, Col, Card, Row, CardPanel, CardTitle} from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      search: ""
    }
  }

  updateSearchValue = (e) => {
    this.setState({search: e.target.value})
  }

  handleTweets = () => {
    // if (e) e.preventDefault();
    fetch('/tweets', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => this.setState({tweets: data.users[0].name}))
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  componentWillMount() {
    this.handleTweets();
  }

  render() {
    console.log('TWEETS', this.state.tweets);
    console.log('Search: ', this.state.search)
    return (
      <div className="App">
      <nav>
        <h3 className="Left"> 🍿 🍭</h3>
        <h2 className='brand-logo center'>Movie Match</h2>
        <h3 className="Right"> 🍭 🍿 </h3>
      </nav>

      <Home tweets={this.state.tweets}
        handleSearch={this.handleSearch}
        updateSearchValue={this.updateSearchValue}
        search={this.state.search} 
      />

      <Row>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
              actions={[<a href='#' className="button hvr-grow">This is a Link</a>]}>
              I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
              actions={[<a href='#' className="button hvr-grow">This is a Link</a>]}>
              I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
              actions={[<a href='#' className="button hvr-grow">This is a Link</a>]}>
              I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>
          </Col>
      </Row>
      </div>
    );
  }
}

export default App;
