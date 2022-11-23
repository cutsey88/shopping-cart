import { useParams, useOutletContext } from "react-router-dom";
import ShopItems from "../components/shopItems";

function ShopContent(props) {

    let params = useParams();
    let category = params.category;

    const [cleanCategory] = useOutletContext();
    let subHeader = category ? cleanCategory(category) : "All";

    return (
        <div className="shop-content">
            <div className="shop-header">
                <p>Shop {subHeader}</p>
            </div>
            <ShopItems category={category} />
        </div>
    )
}

export default ShopContent;