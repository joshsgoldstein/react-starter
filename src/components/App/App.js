import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import DisplayMessage from '../DisplayMessage/DisplayMessage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "term": ''
    };

    this.displayData = this.displayData.bind(this);
  }
  displayData(term) {
    this.setState({
      "term": term
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar displayData={this.displayData} />
        <br />
        <DisplayMessage term={this.state.term} />
        </header>
      </div>
    );
  }
  
}

export default App;
