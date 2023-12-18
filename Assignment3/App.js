import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = <h1>React Element using JSX Test123</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(Heading);

// function greetUser(name){
//     alert('Hello, ' + name + " "+ 'Kalyan' + '!');
// }


//Coding1: Create a Nested header element using React.createElement(h1,h2,h3 inside a div tag with class title)
const header = React.createElement("div", {className: "title"},
[React.createElement("h1",{},"Heading1" ), React.createElement("h2",{},"Heading2"),
React.createElement("h3",{},"Heading3")]
)

//root.render(header);

//Coding1.1: Creating the same element using the JSX:
const header1= <div className='title'>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
</div>

//root.render(header1);

//Coding1.2: Creating the functional component of the same with JSX:
const Header3 = () =>{
    return(
        <div className='title'>
            <h1>Heading1 FC</h1>
            <h2>Heading2 FC</h2>
            <h3>Heading3 FC</h3>
        </div>
    )
}
//root.render(<Header3></Header3>)

//Coding1.3: Pass attributes into tag in JSX:
const Header4 = () =>{
    return(
        <div className='title'>
            <h1 id="heading">Heading1</h1>
            <h2 className='head'>Heading2</h2>
            <h3 className='lihead'>Heading3</h3>
        </div>

    )
}

//root.render(<Header4></Header4>)

//Coding1.4: Add component inside another component (Component Composition):
const Header5 = () =>{
    return(
        <div className='title'>
            <h1>Component Header5Test</h1>
            <Header4></Header4>
        </div>
    )
}
//root.render(<Header5/>);

//Coding2: Create a Header component from scratch using functional components with JSX:
//1) Add  a logo on left
//2) Add  a search bar in middle
//3) Add user icon on right
//4) Add CSS to make it look nice

const Header = () =>{
    return(
        <div className='container'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="React Logo" className='left-image' height={50} width={50}/>
                <input type="text" placeholder='Search...' className='center-input'/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9ujoPAkpfh1SeeY54_MdaxPfwBF739WurHRBoKmFuw&s" alt="UserIcon" className='right-image' height={50} width={50}/>
        </div>
    )
}
root.render(<Header></Header>)





