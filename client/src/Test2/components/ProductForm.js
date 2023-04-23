import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price };
    axios
      .post("http://localhost:8080/api/products", newProduct)
      .then((res) => {
        console.log(res.data);
        setName("");
        setDescription("");
        setPrice("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ProductForm">
      <h2>새 상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>상품명:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>상품 설명:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>가격:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default ProductForm;