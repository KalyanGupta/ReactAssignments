Theory Assignment:

1Q) What is JSX?
Ans: Using JSX we can easily create the React Elements, JSX makes the developers life easy by allowing them to create the React elements in an easier way. 

Creating a React element without JSX:
const ele1= React.createElement("h1", {id:"heading"}, "Test")

Creating a React element with JSX:
const ele2 = <h1 id="heading">Test</h1>
const ele3 = <h1 className="heading1">Test</h1>

JSX is not HTML inside the JavaScript.
JSX is the HTML-Like or XML-Like syntax, means JSX will look like HTML and  XML, but it is not HTML or XML.

JSX is not part of the JavaScript, so browsers cannot understand the JSX, for this reason Babel will convert the JSX into React.createElement, so that the browsers will understand our code.

2Q)What are super powers of JSX?
Ans: In JSX we can include any JavaScript code using the {}

Eg1: including a variable
const number1=100;
const ele = <div> <h1>The value of number1 is {number1}</h1> </div>

Eg2: Evaluting an expression:
const ele1= <div> <h1>{100+30}</h1> </div>

Eg3: Using console.log in the JSX:
const ele2= <div><h1>{console.log("Super powers of JSX)}</h1></div>


3Q)What is the role of type attribute in the script tag? What options I can use there?
Ans: The 'type' attribute in a script tag is used to specify the scripting language or technology of the included script. The primary values for the 'type' attribute are: 1) text/JavaScript(default) and 2)module



To tell the browser that a particular JS file is a module or a normal plain JS file we need to use the type attribute in the script tag. 

Example1:
<script type="module" src="App.js"> </script>

In the above example we are instructing the browser to treat "App.js" as JS ES6 module. 

-> Okay, but why we are telling to include like a JS ES6 module?
Ans: Because our App.js contains the React code. React, especially when used with JSX is typically structured as ES6 modules.

-> Okay, but what are ES6 modules?
Ans: ES6 modules are a feature introduced in ECMAScript 2015 (ES6) to organize and encapsulate JS code into reusable modules. These modules use the "import" and "export" statements to manage dependencies between files. 

In our code (App.js) we are importing react and react-dom, so we should use type="module", this is because you are using ES6 modules to import dependencies like react and react-dom. 

Example2:
<script type="text/JavaScript" src="App.js"> </script>

In the above example we are instructing the browser to treat "App.js" as a plain JS file.



4Q)Explain {TitleComponent} vs <TitleComponent/> vs <TitleComponent></TitleComponent> in JSX?
Ans: {TitleComponent}: This is nothing but we are just using the JS variable in our JSX using {}

Example:
const TitleComponent= 10;
const heading = <div> <h1>value is {TitleComponent}</h1> </div>

{<TitleComponent/>}: This is used for the components without children, which means here TitleComponent cannot have any children.

It is a self-closing component. It represents a React component with no children or content inside it.


{<TitleComponent></TitleComponent>}: This is can contain content or child elements inside it. It is used for defining React components that encapsulate content or may have children.

Example:
{
    <TitleComponent>
        This is some content inside the TitleComponent
    </TitleComponent>
       
}

So, the main difference between second and third is, the self-closing syntax is used for components without children, while the paired tags are used for components that can encapsulate contenr or have child components:


Example:

const TitleComponent = () =>
{
    return(
            <h1>Title Component text</h1>
    )
}

const ReactElement = <div> <h1> {<TitleComponent/>} </h1> </div>

or 

const ReactElement = <div> <h1> {<TitleComponent>Paired Tags</TitleComponent>} </h1> </div>

or 

<TitleComponent>
    <SomeOtherComponent/>
</TitleComponent>

