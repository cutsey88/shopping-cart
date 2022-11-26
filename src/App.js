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
          total: Math.round((prevCart.total + convertPriceToNumber(prevCart.products[prodIndex].price)) * 100) / 100,
        }
      }
      return {
        products: prevCart.products.concat({...productMatch, quantity: 1}),
        total: Math.round((prevCart.total + convertPriceToNumber(productMatch.price)) * 100) / 100,
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
      
      let subTotal = Math.round(convertPriceToNumber(prevCart.products[dIndex].price) * prevCart.products[dIndex].quantity * 100) / 100;
      return {
        products: newProds,
        total: Math.round((prevCart.total - subTotal) * 100) / 100,
      }
    })
  };

  function changeQuantity(e) {
    let productId = e.target.id.slice(3);
    setCart(prevCart => {
      let targetProduct = prevCart.products.find((prod) =>
        prod.id === productId 
      )
      let inputVal = e.target.value === '' ? '0' : e.target.value;
      let oldSubTotal = Math.round((convertPriceToNumber(targetProduct.price) * targetProduct.quantity) * 100) / 100;
      let preTotal = Math.round((prevCart.total - oldSubTotal) * 100) / 100;
      let subTotal = Math.round((convertPriceToNumber(targetProduct.price) * convertPriceToNumber(inputVal) * 100)) / 100;
      let newTotal = Math.round((preTotal + subTotal) * 100) / 100;

      return {
        products: prevCart.products.map((prod) => {
          if (prod.id === productId) {
            return { ...prod, quantity: convertPriceToNumber(inputVal)}
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
