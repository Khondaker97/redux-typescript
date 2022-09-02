import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import ProductForm from "./Products/ProductForm";
import ProductList from "./Products/ProductList";
import store from "./state/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
