import "../styles/cart.css";
import { Link, useOutletContext } from "react-router-dom";
import CartItem from "../components/cartItem";

function Cart() {

    const cartObj = useOutletContext();

    if (cartObj.cart.products.length === 0) {
        return (
            <div className="cart empty-cart">
                <div className="cart-header empty-cart-header" >
                    <p>Cart</p>
                </div>
                <div className="empty-cart-message">
                    <p>Your cart is empty.</p>
                    <Link className="empty-cart-link" to="/shop/all">Shop Now</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <p>Cart</p>
            </div>
            <div className="cart-content">
                <div className="cart-list">
                    {cartObj.cart.products.map((product) => {
                        return <CartItem
                                    key={product.id}
                                    id={`ci-${product.id}`}
                                />
                    })}
                </div>
            </div>
            <div className="cart-resolve">
                <div className="cart-total">
                    <p>Total:</p>
                    <p>${cartObj.cart.total}</p>
                </div>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;