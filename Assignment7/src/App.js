import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from './components/Contact';
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

const root= ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path:"/contact",
                element: <Contact></Contact>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu></RestaurantMenu>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])

//root.render(<AppLayout/>)

root.render(<RouterProvider router={appRouter}/>)












































































































































































































// const TitleVariable="Title is";
// const TitleElement = <h1>Hello World!!</h1>

// const App = ()=>{
//     return(
//         <div>
//             {TitleVariable} {/*Variable*/}
//             {TitleElement} {/*React element*/}
//         </div>
//     )
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));

// const ABC= ({children})=>
// {
//     return(
//         <>
//             {children}
//             <h1>Parent Component ABC</h1>
//         </>
//     )
// }

// const A=()=>
// {
//     return(
//         <>
//          <h1>children Component A</h1>
//         </>
//     )
// }

// const B=()=>
// {
//     return(
//         <>
//           <h1>children Component B</h1>
//         </>
//     )
// }

// const App1=()=>
// {
//     return(
//         <div>
//             <ABC>
//                 <A/>
//                 <B/>
//             </ABC>
//         </div>
//     )
// }


// const XYZ = ({children, name})=>{
//     return(
//         <>
//             <h1>The name is {name}</h1>
//             <h1>This is a XYZ component</h1>
//             {children}
//         </>
//     )
// }

// const App2 = () =>{
//     return(
//         <XYZ name="dummy123">
//             Child content inside the XYZ component.
//         </XYZ>
//     )
// }
// //root.render(<App2></App2>)

// const XYZ1 = (props)=>{
//     const {children, name}=props
//     return(
//         <React.Fragment>
//             <h1>The name is {name}</h1>
//             <h1>This is a XYZ component testtttt</h1>
//             {children}
            
//             <h6>or</h6>
//             <h1>The name is {props.name}</h1>
//             <h1>This is a XYZ component testtttt</h1>
//             {props.children}
//         </React.Fragment>
//     )
// }

// const App21 = () =>{
//     return(
//         <XYZ1 name="dummy1233456">
//             Child content inside the XYZ1 component test.
//         </XYZ1>
//     )
// }
// root.render(<App21></App21>)