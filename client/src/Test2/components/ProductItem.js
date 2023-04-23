import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="ProductItem">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>상세보기</Link>
    </div>
  );
};

export default ProductItem;