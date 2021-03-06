import React, { Component /*,PureComponent*/ } from 'react';
import Person from './Person/Person';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary"

class Persons extends Component /* ou PureComponent qui remplace le travail de shouldComponentUpdate*/ {

    //pour ne pas avoir de warning
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[LifeCycle-Update][Persons.js] getDerivedStateFromProps")
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log("[LifeCycle-Update][Persons.js] componentWillReceiveProps", props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("***Start Component LifeCycle - Update ***")
        console.log("[LifeCycle-Update][Persons.js] shouldComponentUpdate")
        //if i click on remove cockpit all is rendered, its nots hopful
        //i want only rendered when changes concern person
        if (nextProps.persons !== this.props.persons) {
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log("[LifeCycle-Update][Persons.js] getSnapshotBeforeUpdate");
        return { message: 'SnapShot!' };
    }

    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log("[LifeCycle-Update][Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    render() {
        console.log("I am in [Persons.js] rendering...");
        return (
            this.props.persons.map((el, index) => (
                <ErrorBoundary key={el.id}>
                    <Person
                        name={el.name}
                        age={el.age}
                        onChangeEvent={event => this.props.onChanged(event, index)}
                        deletePerson={() => this.props.onDelete(index)}
                    />
                </ErrorBoundary>)
            )
        );
    }
}

// const persons = (props) => {
//     console.log("I am in [Persons.js] rendering...");
//     return props.persons.map((el, index) => (
//     <ErrorBoundary key={el.id}>
//         <Person
//             name={el.name}
//             age={el.age}
//             onChangeEvent={event => props.onChanged(event, index)}
//             deletePerson={() => props.onDelete(index)}
//         />
//     </ErrorBoundary>
// ))}

export default Persons;