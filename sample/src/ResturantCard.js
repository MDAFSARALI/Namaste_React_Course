const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        image,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div
            className="res-card"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className="res-logo"
                src={image.url}
                alt="Biryani"
            />

            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
