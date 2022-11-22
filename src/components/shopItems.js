import { getProducts, getProductsByCategory } from '../data';
import ShopItem from '../components/shopItem';

function ShopItems(props) {
    
    let products = props.category === undefined ? getProducts() : getProductsByCategory(props.category);

    return (
        <div className="shop-items-box">
            {products.map((product) => {
                return (
                    <ShopItem key={product.id} {...product} />
                )
            })}
        </div>
    )
}

export default ShopItems;