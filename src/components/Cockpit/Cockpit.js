import React from 'react';
import cssClass from './Cockpit.css'

const cokpit = (props) => {

    let btnClass = '';
    if (props.showPersons) {
        btnClass = cssClass.Red;
    }

    const assignclasses = [cssClass.hidden];
    if ((props.persons.length === 1)) {
        assignclasses[0] = cssClass.warning;
    }

    return (
        <div className={cssClass.Cockpit}>
            <p className={assignclasses}>
                Becareful : there still only one element in list
        </p>
            <button
                className={btnClass}
                // if btnClass='' il prendera automatiquement la classe 'For every button 
                //nested in classe App, i.e App btton
                onClick={
                    // switchNameHandler.bind(
                    //   this,
                    //   "marguerite"
                    // ) ou () => switchNameHandler("marguerite")
                    props.onToggle
                }>Toggle Persons</button>
        </div>
    )
}

export default cokpit;