import { useOutletContext } from "react-router-dom";
import { convertPriceToNumber } from "../data";

function CartItem(props) {

    const cartObj = useOutletContext();
    let productId = props.id.slice(3);
    let product = cartObj.cart.products.find((prod) =>
        prod.id === productId
    );

    let subTotal = Math.round((product.quantity * convertPriceToNumber(product.price) * 100)) / 100;

    return (
        <div className="cart-item" id={props.id}>
            <div className="cart-image-box">
                <img src={product.image} alt={product.name} className="cart-image" />
            </div>
            <div className="cart-item-info">
                <div className="unit-box">
                    <p className="cart-item-name">{product.name}</p>
                    <p className="unit-price">${product.price}</p>
                </div>
                <div className="quantity-box">
                    <p className="cart-item-quantity">Quantity:</p>
                    <input
                        type="number"
                        id={'qi-' + productId}
                        value={product.quantity}
                        min="1"
                        onChange={cartObj.changeQuantity}
                    />
                </div>
            </div>
            <div className="item-subtotal">
                <p className="subtotal-text">SubTotal:</p>
                <p>${subTotal}</p>
                <button
                    id={'db-' + productId}
                    className="delete-item-"
                    onClick={cartObj.deleteFromCart}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CartItem;