Question1) Is JSX mandatory for React?
Answer: No, JSX is not mandatory for React, we can build React applications without JSX also.
But JSX makes developers life easy by allowing them to easily create the React elements.

Example:

Creating React element without JSX:

const headingele = React.createElement("h1", {id:"heading1"}, "Hello world")

Creating React element With JSX:

const headingele = <h1 id="heading1">Hello world</h1>
 
In the above example we can clearly see how easy it is to create the React elements with JSX when compared to without JSX. So, to easily create the React elements we will use the JSX.

******************************************************************************************************
Question2) Is ES6 mandatory for React?
Answer: No, it is not mandatory to use ES6 to work with React. 

To use React without ES6, we need to install a node module called  "create-react-class" using the following command: "npm install create-react-class".

Defining React components with ES6: This is the usual way of representing a class component in React

import React from "react";
class App extends React.Component
{
    render()
    {
        return <h1>Hello world</h1>
    }
}
export default App;
---------------------------------------------------------------------------------------------------
Defining React components without ES6: Here we will take the help of the "create-react-class" module. 

Firstly, we will require the "create-react-class" module in our file. Then we create a variable App that uses the createReactClass API to define the render function:

import React from "react";
var createReactClass = require('create-react-class');
var App = createReactClass({
    render: function(){
        return <h1>Hello World</h1>
    }
})
export default App;


*****************************************************************************************************
Question3) {TitleComponent} vs <TitleComponent/> vs <TitleComponent></TitleComponent>
Answer: 
-> {TitleComponent}: This value describes the TitleComponent as a JavaScript expression or a variable or a React element. The {} can embed a JavaScript expression or a variable or React element inside it.

Example:

const TitleVariable="Title is";
const TitleElement = <h1>Hello World!!</h1>

const App = ()=>{
    return(
        <div>
            {TitleVariable} {/*Variable*/}
            {TitleElement} {/*React element*/}
        </div>
    )
}

-> <TitleComponent/>: This represents a self-closing JSX component. In React, when you write <TitleComponent/>, it is interpreted as a self-closing component named as 'TitleComponent'. This means that 'TitleComponent' is a React component without any children.


-> <TitleComponent></TitleComponent>: This represents an opening and closing tag for a JSX component named 'TitleComponent'. This means that "TitleComponent" is a React component that can have content or child elements placed between the opening and closing tags. 

Note: 
In React, "children" is a special prop that represents the content placed between opening and closing tags of an component. 

In the below two examples we are doing the "Destructuring the props on fly"

Example1: Placing components inside the opening and closing tags of an component

const ABC= ({children})=>
{
    return(
        <>
            {children}
            <h1>Parent Component ABC</h1>
        </>
    )
}

const A=()=>
{
    return(
        <>
         <h1>children Component A</h1>
        </>
    )
}

const B=()=>
{
    return(
        <>
          <h1>children Component B</h1>
        </>
    )
}

const App1=()=>
{
    return(
        <div>
            <ABC>
                <A/>
                <B/>
            </ABC>
        </div>
    )
}

root.render(<App1/>);

Example2: Placing content inside the opening and closing tags of an component and also passing extra prop

const XYZ = ({children, name})=>{
    return(
        <>
            <h1>The name is {name}</h1>
            <h1>This is a XYZ component</h1>
            {children}
        </>
    )
}

const App2 = () =>{
    return(
        <XYZ name="dummy">
            Child content inside the XYZ component...
        </XYZ>
    )
}
root.render(<App2></App2>)

or we can also do the same thing like this:

const XYZ1 = (props)=>{
    const {children, name}=props
    return(
        <>
            <h1>The name is {props.name}</h1>
            <h1>This is a XYZ component test</h1>
            {props.children}

            <h6>or</h6>

            <h1>The name is {props.name}</h1>
            <h1>This is a XYZ component testtttt</h1>
            {props.children}
        </>
    )
}

const App21 = () =>{
    return(
        <XYZ1 name="dummy1233456">
            Child content inside the XYZ1 component test.
        </XYZ1>
    )
}
root.render(<App21></App21>)
*******************************************************************************************************
Question4) How can I write comments in JSX?
Answer: {/* Comments in JSX */}
******************************************************************************************************
Question5) What is <React.fragment></React.fragment> and <></>?
Answer: A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

Example:

return(
    <React.Fragment>
        <ChildA/>
        <ChildB/>
        <ChildC/>
    </React.Fragment>
)

In the above code we have used <React.Fragment></React.Fragment> if we dont use them, we should use 
other elements like <div></div>:
return(
    <div>
        <ChildA/>
        <ChildB/>
        <ChildC/>
    </div>
)

This <div></div> will be added to the DOM, so inorder to avoid extra additions to the DOM, we will use the <React.Fragment></React.Fragment>

<></> is the short hand notation for the <React.Fragment></React.Fragment> but <></> does not support and keys or attributes.

Note: Key is the only attribute that can be passed to Fragment. 
******************************************************************************************************
Question6) What is Virtual DOM?
Answer: Before understanding what virtual DOM is lets understand what is DOM (Browser/Real DOM).
DOM stands for the "Document Object Model". It is a structured representation of HTML in the webpage or application. It represents the entire UI of the web application as the tree data structure.

In simple words, DOM is the structural representation of HTML elements of a web application. 

DOM is very useful as it allows webdevelopers to modify the content through JavaScript, also it being in structured format  helps a lot as we choose specific targets and all the code become much easier to work with. 

Disadvantages of real DOM?
-> When there is a change, then the entire DOM will be re-rendered. 


Now, lets see what Virtual DOM is: Virtual DOM is the light weight copy of the Real DOM. Whenever there is a change in the any element, a new virtual DOM is created, this new virtual dom is compared with the previous virtual DOM tree and make note of the changes. After this, it finds the best possible ways to make changes to the real DOM. Now only the updated elements will get rendered on the page again. 

The process of comparing the current virtual DOM tree with the previous one is known as "Diffing". Once React finds out what exactly has changed then it updates those elements only, on real DOM. 
*******************************************************************************************************
Question7)What is Reconciliation in React?
Answer: Reconciliation in React is what we discussed in the above question about virtual DOM.

React reconciliation is the process through which React updates the browser DOM. It makes DOM updates faster in React. It updates the virtual DOM first and then uses the Diffing algorithm to make efficient and optimized updates in the Real DOM. 

Extra notes:
-> React stores a copy of Browser DOM which is called Virtual DOM.

-> When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one.

-> Comparison is done by Diffing Algorithm. The cool fact is all these comparisons take place in the memory and nothing is yet changed in the Browser.

-> After comparing, React goes ahead and creates a new Virtual DOM having the changes. It is to be noted that as many as 200,000 virtual DOM nodes can be produced in a second.

-> Then it updates the Browser DOM with the least number of changes possible without rendering the entire DOM again. This changes the efficiency of an application tremendously
******************************************************************************************************
Question8)What is React fiber?
Answer: A reconciler is a component responsible for updating the virtual DOM and applying changes to the actual DOM. 

React Fiber is a new reconciler that was introduced in React 16.0. The main aim is to improve the performance of React applications, especially in areas such as animation and layout.

React Fiber is Asynchronous. So it can:
-> pause, resume and restart rendering work on components as new updates comes
-> reuse previously completed work or abort it if not required
-> split work into chunks and prioritize task based on importance
*******************************************************************************************************
Question9)Why we need keys in React? When do we need keys in React?
Answer: Lets say we have Restaurant container, inside the Restaurant container we have 20 Restaurant cards like we are displaying all those 20 cards in our container. 

Now, let’s say we did not give the key property while looping over the 20 restaurant cards:

In future if one more restaurant card is added to the API, then React will re-render all those 21 restaurant cards, because React does not able to identify which is newly added, so it will clean up everything in the container and re-render all those 21 restaurant cards.  

Now, let’s say we gave the key property while looping over the 20 restaurant cards:

In future if one more restaurant card is added to the API, then React will render only one newly added restaurant card, it does not clean up the container. so, it just adds newly added restaurant card to the existing restaurant cards, because React now can uniquely identify each Restaurant card. 

So, React gives that warning message to tell us to optimize our code. 


Whenever you are looping on any list, we have to give the key while looping. key is the reserved keyword, and we need to give the unique ID for the key. For our example we can pass the Restaurant ID for the key. 
********************************************************************************************************
Question10)Can we use Index as keys on React?
Answer: React itself says that never use index as the key. Only use index as the key when there is no unique identifier for your data. Because, there might be a possibility that if we modify the incoming data react may render them in unusual order.
********************************************************************************************************
Question11)What are props in React and ways to?
Answer: Props is the shortform for properties. By using props, we can make our components dynamic.

We can pass the props to the components. If we want to pass the data to the component dynamically then we can pass them via props. 

We all know that functional components are just a JavaScript functions, then props are just arguments to that JavaScript function. Passing props to the component is just like passing arguments to the function.

Example:
<RestaurantCard name="MeghanaFoods" cuisines="Biryani Chineese"> </RestaurantCard>

The above code is called “Passing props to the component”.

What React does is, it will take all those properties and wrap it inside an object and pass those as props to the mentioned component (RestaurantCard)

We can also pass Array of object as Props:

Example:
const ResList=[
    {
        "id":1,
        "name":"Biryani"
    },
    {
        "id":2,
        "name":"Chineese"
    }
]

ResList.map((restaurant)=>
    <RestaurantCard key={restaurant.id} resData={restaurant}>
)
********************************************************************************************************
Question12)What is config driven UI?
Answer: Lets understand with an example: When you open Swiggy based on your location there will be some offers for you like 50 percent discount on particular item. But when someone looks for the same item from same restaurant but from different location, he/she may or may not have the same discount which is shown to you.  So, the Restaurant cards will be different for different locations, so this way of building the UI is called config driven UI. 

Here Swiggy website is driven by the data/config, this is known as config driven UI. 

So, config driven UI is like controlling how the UI looks like using the data/config. The data/config comes from the backend.
********************************************************************************************************
















