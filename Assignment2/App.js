import React from 'react';
import ReactDOM  from 'react-dom';
// Hello world using Javascript DOM manipulation 
const heading1 = document.createElement("h1")
heading1.innerHTML = "Hello World from JavaScript";
const root = document.getElementById("root");
root.appendChild(heading1);


// Hello world using the React 
const heading = React.createElement("h1", {}, "Hello world from React") //Here heading is the React element
console.log(heading);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
//root1.render(heading);



/*
Creating nested elements:
Example: Creating this structure:

<div id=”parent”>
<div id=”child”>
    <h1>I am h1 tag </h1>
</div>
</div>

*/
const nestedEle = React.createElement("div", 
                                     {id:"parent"},
                                     React.createElement("div",
                                     {id:"child"},
                                     React.createElement("h1",
                                     {},
                                     "I am h1 tag")))
// root1.render(nestedEle);


/* Creating Nested Elements:
Example: Creating this structure: 

    <div id=”parent”>
        <div id=”child”>
            <h1>I am h1 tag </h1>
            <h2>I am h2 tag </h2>
        </div>
    </div>
*/

const nestedElements2 = React.createElement("div",
                                          {id:"parent"},
                                          React.createElement("div",
                                          {id:"child"},
                                          [React.createElement("h1",{}, "I am h1 tag"),
                                           React.createElement("h2",{},"I am h2 tag")
                                          ])
                                          )

root1.render(nestedElements2);







