import { CLOUDIMAGE } from "../utils/Constants";
const RestaurantCard = (props) =>{
    const {resData}= props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;


    const styleCard = {
        backgroundColor: "#f0f0f0",
    };


    return(
        <>
            <div className="res-card" style={styleCard}>
                <img 
                src={CLOUDIMAGE+cloudinaryImageId}
                alt="Food Card"
                className="res-logo"
                />
                <h3>{name}</h3>
                <h3>{avgRating}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwo}</h3>
                <h3>{deliveryTime} minutes</h3>
            </div>
        </>
    )
}
export default RestaurantCard;