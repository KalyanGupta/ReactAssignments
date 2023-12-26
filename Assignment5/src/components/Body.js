import RestaurantCard from "./RestaurantCard";
import { ResList } from "../utils/MockData";
import { useState } from "react";
const Body = () =>{
    const[searchText, setSearchText] = useState("");
    const[listOfRestaurants, setListOfRestaurants] = useState(ResList);
    const[filteredRestaurants, setFilteredRestaurants] = useState(ResList);
    return(
        <>
            <div className="body">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setSearchText(e.target.value);
                    }}
                    />

                    <button onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res) => {return res.info.name.toLowerCase().includes(searchText.toLowerCase())}
                            )
                            setFilteredRestaurants(filteredList);
                    }}> 
                    Search
                    </button>

                </div>
                    <div className="res-container">
                        {  filteredRestaurants.length <= 0? <h1>No results found</h1>: 
                            filteredRestaurants.map((restaurant)=>
                            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                        }
                    </div>            
            </div>
        </>
    )
}
export default Body;