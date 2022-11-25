import { useParams, useOutletContext } from "react-router-dom";
import { getProductById } from "../data";
import '../styles/itemPage.css';

function ItemPage() {

    let params = useParams();
    let itemId = params.itemId;
    const cartObj = useOutletContext();
    let item = getProductById(itemId)

    return (
        <div className="item-page">
            <div className="image-content">
                <div className="ip-image-box">
                    <img className="ip-item-image" src={item.image} alt={item.name} />
                </div>
            </div>
            <div className="item-content">
                <div className="item-info-box">
                    <p className="ip-item-name">{item.name}</p>
                    <p className="ip-item-description">
                        Suchaniceproduct Suchaniceproduct Suchaniceproduct
                        Suchaniceproduct Suchaniceproduct Suchaniceproduct
                        Suchaniceproduct Suchaniceproduct Suchaniceproduct
                        Suchaniceproduct Suchaniceproduct Suchaniceproduct
                    </p>
                    <p className="ip-item-price">${item.price}</p>
                </div>
                <button id={`ac-${itemId}`} className="add-to-cart" onClick={(e) => { cartObj.addToCart(e) }}>Add to Cart</button>
            </div>

        </div>
    )
}

export default ItemPage;