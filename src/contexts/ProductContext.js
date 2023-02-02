import React, { createContext, useEffect, useState } from "react";

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Product State
  const [products, setProducts] = useState([]);

  // Fetching Product
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
