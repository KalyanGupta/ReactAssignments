import RestaurantCard from "./RestaurantCard";
import { ResList } from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{
    const[searchText, setSearchText] = useState("");
    // const[listOfRestaurants, setListOfRestaurants] = useState(ResList);
    // const[filteredRestaurants, setFilteredRestaurants] = useState(ResList);
    const[listOfRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        FetchData();
    }, [])

    const FetchData = async() =>{
        const SwiggyURL= "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        try{
            const response = await fetch(SwiggyURL);
            console.log(response);
            const json = await response.json();
            console.log(json);
            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }
        catch(e)
        {
            console.log(e);
        }
    }

    console.log("Body rendering")
    return listOfRestaurants.length == 0 ? (<Shimmer></Shimmer>)
    :
    (
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