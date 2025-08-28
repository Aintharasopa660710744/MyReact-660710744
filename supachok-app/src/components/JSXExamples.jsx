import React from "react"

function JSXExamples(){

    const greeting = <h>Hello</h>
    const name = 'Who';
    const age = 20;

    const currentYear = new Date().getFullYear();

    const user ={
        firstName: 'ศุภโชค',
        lastName: 'อินทรโสภา',
        age : 21,
        hobbie: ['นอน','เล่นเกม']
    }

    const isLoggedIn = true;
    const hasNotification = 3;

    return {

        <div className="jsx-examples">
            <h1>Hiw</h1>

            <section>
            <h2>การแสดงผล
            {greeting}
            <p>สวัสดี {name} อายุ {age}</p></h2>
            <p>นี่คือปี {currentYear}</p>
            </section>
        </div>
    }

}