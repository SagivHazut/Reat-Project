import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/LoginPage/SignupPage";
import Footer from "./pages/Footer/FooterComponent";
import Commerce from "./Commerce";
import { commerce } from "./lib/commerce";
import Cart from "./E-commerce/Cart/Cart";
import Products from "./E-commerce/Products";
import React, { useState, useEffect } from "react";

// https://www.youtube.com/watch?v=377AQ0y6LPA

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProduct(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div>
      <NavBarComponent totalItems={cart.total_items} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <AuthGuardRoute path="/cart" component={Cart} />

        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route
          path="/commerce"
          component={Commerce}
          onAddToCart={handleAddToCart}
        >
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>

        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
