import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <p>Counter Parts</p>
            </div>
            <div className="header-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </div>
        </nav>
    )
}

export default Header;