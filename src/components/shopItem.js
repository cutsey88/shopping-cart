function ShopItem(props) {
    return (
        <div className="item-box">
            <img className="item-image" src={props.image} alt={props.name} />
            <p className="item-name">{props.name}</p>
            <p className="item-price">${props.price}</p>
        </div>
    )
}

export default ShopItem;