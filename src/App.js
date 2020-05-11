import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <div className="App-Header">
          <h1>Robots Search Tool</h1>
          <SearchBox placeholder="Search Robots" handleChange={e => this.setState({ searchField: e.target.value })} />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  } 
}

export default App;
