import React, { Component } from "react";
import allClassesInAppCss from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit"
import WithClass from "../hoc/WithClasses"

class App extends Component {

  constructor(props) {
    super(props);
    console.log('I am in a [App.js] Constructor');
  }

  state = {
    appTitle: "Persons",
    persons: [
      { name: "BOB", age: 35, id: 1 },
      { name: "MARY", age: 33, id: 2 },
      { name: "ELIZE", age: 13, id: 3 },
      { name: "MIKE", age: 7, id: 4 }
    ],
    showPersons: false,
    showCockpit: true
  }


  static getDerivedStateFromProps(props, state) {
    console.log('I am in a [App.js] getDerivedStateFromProps', props);
    return state;
  }

  //pour ne pas avoir de warning
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // const switchNameHandler = newName => {
  //   console.log(newName);
  //   setPersonsState({
  //     persons: [
  //       { name: "naila", age: 14, id: 1 },
  //       { name: "ramzy", age: 7, id: 2 },
  //       { name: newName, age: 12, id: 3 }
  //     ]
  //   });
  // };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      persons: this.state.persons,
      showPersons: !doesShow
    });
  };

  onChangeHandler = (event, indice) => {
    let person = this.state.persons[indice];
    person.name = event.target.value;
    const personsClone = [...this.state.persons];
    personsClone[indice] = person;
    this.setState({
      persons: personsClone,
      showPersons: this.state.showPersons
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons, showPersons: this.state.showPersons });
  };

  render() {
    console.log("I am in [App.js] render");
    //SetUp
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        onChanged={this.onChangeHandler}
        onDelete={this.deletePersonHandler} />
    }

    const assignclasses = [allClassesInAppCss.hidden];
    if ((this.state.persons.length === 1)) {
      assignclasses[0] = allClassesInAppCss.warning;
    }
    //End SetUp
    return (
      <WithClass classes={allClassesInAppCss.App}>
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }}>Remove Show Cockpit</button>

        {this.state.showCockpit ? <Cockpit
          personsCount={this.state.persons.length}
          showPersons={this.state.showPersons}
          appTitle={this.state.appTitle}
          onToggle={this.togglePersonHandler} /> : null}

        {persons}
      </WithClass>
    );//END RETURN
  }
  //END RENDER
};

export default App;
