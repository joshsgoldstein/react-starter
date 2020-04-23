import React from 'react';
import './SearchBar.css';
// import { render } from '@testing-library/react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };    
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleTermChange(event) {
        console.log("Handle Term Change has been called with the value: " + event.target.value);
        this.setState({
            term: event.target.value
        });
        console.log(this.state);
    }
   
    handleSearch(event) {
        console.log("Submit has been hit");
        console.log(this.props);
        this.props.displayData(this.state.term);
        event.preventDefault();
    }

    render() {
           return <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input id="termInput" type="inputText" onChange={this.handleTermChange} placeholder="Search Businesses" />     
                </div>
                <div className="SearchBar-submit" id="clickButton" onClick={this.handleSearch}>
                    <a>Talk to Me</a>
                </div>
            </div>
    }
}

export default SearchBar;