import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../hooks/store/store.hooks";
import { addProduct, Product } from "../state/Product.slice";

const initialValues = {
  title: "",
  price: 0,
  id: "",
};
const ProductForm = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product>(initialValues);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({
      title: "",
      price: 0,
      id: "",
    });
  };
  return (
    <div>
      <h3>Add Game</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={product.id}
          onChange={handleChange}
        />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default ProductForm;
