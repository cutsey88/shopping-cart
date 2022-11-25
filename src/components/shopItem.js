import { useNavigate } from "react-router-dom";

function ShopItem(props) {
    let navigate = useNavigate();

    function goToItemPage(e) {
        let productId = e.currentTarget.id.slice(3);
        navigate(`/${productId}`);
    }

    return (
        <div className="sp-item-box" id={'ib-' + props.id} onClick={goToItemPage}>
            <div className="sp-image-box">
                <img className="sp-item-image" src={props.image} alt={props.name} />
            </div>
            <div className="info-box">
                <p className="sp-item-name">{props.name}</p>
                <p className="sp-item-price">${props.price}</p>
            </div>
        </div>
    )
}

export default ShopItem;