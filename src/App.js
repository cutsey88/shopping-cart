import './styles/App.css';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { getProducts, convertPriceToNumber } from './data';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  const [cart, setCart] = useState(
    {
      products: [],
      total: 0,
    }
  );

  function addToCart(e) {
    console.log(cart);
    let productId = e.target.id.slice(3);
    let products = getProducts();
    let productMatch = products.find((prod) =>
      prod.id === productId
    );
    setCart(prevCart => {
      let prodIndex = prevCart.products.findIndex((prod) =>
        prod.id === productId
      )
      if (prodIndex !== -1) {
        return {
          products: prevCart.products.map((prod) => {
            if (prod.id === productId) {
              return { ...prod, quantity: prod.quantity + 1};
            }
            return prod;
          }),
          total: prevCart.total + convertPriceToNumber(prevCart.products[prodIndex].price),
        }
      }
      return {
        products: prevCart.products.concat({...productMatch, quantity: 1}),
        total: prevCart.total + convertPriceToNumber(productMatch.price),
      };
    })
  };

  function deleteFromCart(e) {
    let productId = e.target.id.slice(3);
    setCart( prevCart => {
      let dIndex = prevCart.products.findIndex((prod) =>
        prod.id === productId
      )
      let newProds = prevCart.products.slice(0, dIndex)
        .concat(prevCart.products.slice(dIndex + 1));
      
      let subTotal = prevCart.products[dIndex].price * prevCart.products[dIndex].quantity;
      return {
        products: newProds,
        total: prevCart.total - convertPriceToNumber(subTotal),
      }
    })
  };

  function changeQuantity(e) {
    let productId = e.target.id.slice(3);
    setCart(prevCart => {
      let targetProduct = prevCart.products.find((prod) =>
        prod.id === productId 
      )
      let oldSubTotal = convertPriceToNumber(targetProduct.price) * targetProduct.quantity;
      let preTotal = prevCart.total - oldSubTotal;
      let newTotal = preTotal + (convertPriceToNumber(targetProduct.price) * convertPriceToNumber(e.target.value));

      return {
        products: prevCart.products.map((prod) => {
          if (prod.id === productId) {
            return { ...prod, quantity: convertPriceToNumber(e.target.value)}
          }
          return prod;
        }),
        total: newTotal,
      }
    });
  }

  return (
    <div className="app">
      <Header />
      <Outlet context={{cart, addToCart, deleteFromCart, changeQuantity}}/>
      <Footer />
    </div>
  );
}

export default App;
