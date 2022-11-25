import { NavLink } from "react-router-dom";
import { getCategories } from "../data";

function Sidebar(props) {

    let categories = getCategories();

    return (
        <nav className="sidebar">
            <NavLink
                to="/shop/all"
                end
            >
                All
            </NavLink>
            {categories.map((category) => {
                return (
                    <NavLink
                        to={`/shop/${category}`}
                        key={category}
                    >
                        {props.cleanCategory(category)}
                    </NavLink>
                    )
            })}
        </nav>
    )
}

export default Sidebar;