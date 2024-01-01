import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{

    const [restInfo, setRestInfo] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    console.log(useState());
    console.log("test")

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    
    useEffect(()=>{
        fetchMenu();
    }, [])

    const params = useParams();

    const fetchMenu = async () =>{
        const swiggyMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`;
        const response = await fetch(swiggyMenuURL);
        const json = await response.json();
        //console.log(json);
        setRestInfo(json);
    }

    if(restInfo===null)
        return <Shimmer></Shimmer>

    const {info} = restInfo?.data?.cards[0]?.card?.card;
    const {itemCards} = restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {title} = restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const title1=title;
    const itemCards1 = itemCards;
    
    return(
        <div>
        <h1>{info.name}</h1>
        <h1>{title1} ({itemCards1.length}) <span onClick={toggleExpansion}><strong>{isExpanded ? '^' : 'v'}</strong></span> </h1>
        <ul>
            {
                isExpanded && (
                itemCards1.map((items)=>
                <li key={items.card.info.id}>
                    {items.card.info.name}
                    <h1>
                    </h1>
                        RS {items.card.info.price/100}
                    <h1>
                    </h1>
                </li>
        ))}
        </ul>
    
        <h3>________________________________________________________________________________________________</h3>
        
       
        </div>
    )
}
export default RestaurantMenu;