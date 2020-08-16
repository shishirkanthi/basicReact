import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Table from "./Table";
import Form from './Form';

class App extends React.Component {
  state = {
    people: [
      {
        name: "Charles",
        job: "VP",
      },
      {
        name: "Gaurav",
        job: "ED",
      },
      {
        name: "Matt",
        job: "MD",
      },
    ]
  };

  removePerson = (index) => {
    const {people} = this.state
    this.setState({
      people:people.filter((person, i) => {
        return i!==index
      })
    })
    
  }

  handleSubmit = (person) =>{
    this.setState({people:[...this.state.people, person] })
  }

  render() {
    const {people} = this.state

    return (
      <div className="container">
        <Table peopleData={people} removePerson={this.removePerson}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
