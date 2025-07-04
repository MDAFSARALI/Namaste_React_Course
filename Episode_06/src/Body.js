import { useState } from "react";
import RestaurantCard from "./ResturantCard";
import resList from "../utils/Data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newRest = listOfRestaurants.filter((rest) => {
              return rest.info.ratingNew.ratings.DELIVERY.rating>=4.1;
            });
            setListOfRestaurants(newRest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
