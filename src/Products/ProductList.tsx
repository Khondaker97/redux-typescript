import React, { FC } from "react";
import { useSelector } from "react-redux";
import { productSelector } from "../state/Product.slice";

const ProductList: FC = () => {
  const products = useSelector(productSelector);

  return (
    <div>
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : $ ${product.price}`}</span>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
