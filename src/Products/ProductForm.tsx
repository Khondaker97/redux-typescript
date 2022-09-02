import React, { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../state/Product.slice";

const initialValues = {
  title: "",
  price: 0,
  id: "",
};

const ProductForm = () => {
  const [addProduct, setAddProduct] = useState<Product>(initialValues);
  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setAddProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(addProduct);
  };
  return (
    <div>
      <h3>Add Game</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={addProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={addProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={addProduct.id}
          onChange={handleChange}
        />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default ProductForm;
