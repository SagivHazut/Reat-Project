import { Redirect } from "react-router-dom";

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
import Checkout from "./E-commerce/CheckoutForm/Checkout/Checkout";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// https://www.youtube.com/watch?v=377AQ0y6LPA

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      <CssBaseline />

      <NavBarComponent
        totalItems={cart.total_items}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <Route path="/cart">
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route
          path="/commerce"
          component={Commerce}
          onAddToCart={handleAddToCart}
        >
          <Products
            products={products}
            onAddToCart={handleAddToCart}
            handleUpdateCartQty
          />
        </Route>

        <AuthGuardRoute path="/checkout" />
        <Checkout
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errorMessage}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
