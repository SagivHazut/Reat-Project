import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import Products from "./E-commerce/Products";
const Commerce = () => {
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
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Commerce;
