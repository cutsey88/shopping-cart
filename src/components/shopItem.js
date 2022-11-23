function ShopItem(props) {
    return (
        <div className="item-box">
            <div className="image-box">
                <img className="item-image" src={props.image} alt={props.name} />
            </div>
            <div className="info-box">
                <p className="item-name">{props.name}</p>
                <p className="item-price">${props.price}</p>
            </div>
        </div>
    )
}

export default ShopItem;