import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Shop from "./routes/shop";
import ShopContent from "./routes/shopContent";
import ItemPage from "./routes/itemPage";
import Cart from "./routes/cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />}>
                        <Route index element={<ShopContent />}/>
                        <Route path=":category" element={<ShopContent />}/>
                    </Route>
                    <Route path=":itemName" element={<ItemPage />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;