import "../styles/cart.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/cartItem";

function Cart() {

    const cartObj = useOutletContext();
    console.log(cartObj.cart)

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