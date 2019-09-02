import React, { useEffect } from 'react';
import cssClass from './Cockpit.css'

const cokpit = (props) => {

    useEffect(() => {
        //When Mounted -- >Main function (Fake http request) 
        const timer = setTimeout(() => { alert('Cockpit mounted') }, 3000);

        // when will unmounted (remove)     
        return () => { clearTimeout(timer); alert("Clean up & Cockpit unmounted") }
    }, [/*rmq1*/]);

    //Rmq1: array is supposed contains conditions or dependencies to trigger http request
    //if array is empty it means useEffect() only excute in first render

    //Rmq2: 
    //qd je clique sur Add cockbit --> alert main function (first render)
    //qd je clique sur Remove cockbit --> alert ("clean up")
    //qd je clique sur Add mais avant 3 seconde je clique sur remove no alert for main function (cause clearTimeout())
    //if remove [] et qd je clique ailleurs in App.js --> clean up se lance tjrs avant the main function but after first render() 

    //Rmq3: je peux avoir autant de useEffet()

    // useEffect(
    //     () => {
    //         alert("alert from SECONDE useEffect");
    //         return () => { alert("Clean up from SECOND useEffect") }
    //     } // clean up --> se lance tjrs avant the main function mais aprés the first render cycle
    // )

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