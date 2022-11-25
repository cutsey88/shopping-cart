import { useOutletContext } from "react-router-dom";
import { convertPriceToNumber } from "../data";

function CartItem(props) {

    const cartObj = useOutletContext();
    console.log(cartObj.cart)
    let productId = props.id.slice(3);
    let product = cartObj.cart.products.find((prod) =>
        prod.id === productId
    );

    let subTotal = product.quantity * convertPriceToNumber(product.price);

    return (
        <div className="cart-item" id={props.id}>
            <div className="cart-image-box">
                <img src={product.image} alt={product.name} className="cart-image" />
            </div>
            <div className="cart-item-info">
                <p className="cart-item-name">{product.name}</p>
                <div className="quantity-box">
                    <p className="cart-item-quantity">Quantity:</p>
                    <input type="number" id={'qi-' + productId} value={product.quantity} onChange={cartObj.changeQuantity}/>
                </div>
            </div>
            <div className="item-subtotal">
                <p className="subtotal-text">SubTotal:</p>
                <p>${subTotal}</p>
            </div>
        </div>
    )
}

export default CartItem;