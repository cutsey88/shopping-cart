import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import '../styles/shop.css';

function Shop() {

    function cleanCategory(category) {
        let splitWords = category.split('-');
        let cleanCategory = '';
        for (let i = 0; i < splitWords.length; i++) {
            if (i === splitWords.length - 1) {
                cleanCategory = cleanCategory.concat(splitWords[i][0].toUpperCase().concat(splitWords[i].slice(1)));
            } else {
                cleanCategory = cleanCategory.concat(splitWords[i][0].toUpperCase().concat(splitWords[i].slice(1)) + ' ');
            }
        }
        return cleanCategory;
    }

    return (
        <div className="shop">
            <Sidebar cleanCategory={cleanCategory}/>
            <Outlet context={[cleanCategory]}/>
        </div>
    )
}

export default Shop;