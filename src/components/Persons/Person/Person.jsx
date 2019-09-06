import React, { Component } from "react";
import classes from "./Person.css";
import "./Person.css";
import Aux from "../../../hoc/Auxiliary";

class Person extends Component {

  render() {
    console.log("I am in [Person.js] rendering...");
    return (
      <Aux className="Person">
        <br />
        <button className={classes.RemoveButton} onClick={this.props.deletePerson}>
          -
        </button>
        <h5>
          My name is {this.props.name} and I am {this.props.age} old
        </h5>
        <input type="text" value={this.props.name} onChange={this.props.onChangeEvent} />
      </Aux>);
  }
}
// const Person = props => {
//   console.log("I am in [Person.js] rendering...");
//   return (
//     <div className="Person">
//       <br />
//       <button className={classes.RemoveButton} onClick={props.deletePerson}>
//         -
//       </button>
//       <h5>
//         My name is {props.name} and I am {props.age} old
//     </h5>
//       <input type="text" value={props.name} onChange={props.onChangeEvent} />
//     </div>);
// }
export default Person;
