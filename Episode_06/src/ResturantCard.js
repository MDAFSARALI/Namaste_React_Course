const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        image,
        name,
        cuisine,
        cft
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
            <h4>{cuisine[0].name}</h4>
            <h4>{resData.info.ratingNew.ratings.DELIVERY.rating}★ </h4>
            <h4>{cft.text}</h4>
            <h4>{resData.order.deliveryTime}</h4>
            <button>Order Now</button>
        </div>
    );
};

export default RestaurantCard;
