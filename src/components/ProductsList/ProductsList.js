import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProductToShoppingList } from "../../redux/shoppingListSlice";
import { setSelectedProduct } from "../../redux/productsSlice";

function ProductsList() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.list);

  const postProductToShoppingList = async (product) => {
    try {
      dispatch(setSelectedProduct(product));
      const response = await axios.post(
        `http://localhost:9000/products/shoppingList/new`,
        {
          ...product,
        }
      );
      console.log(response.data);
      dispatch(addProductToShoppingList(response.data));
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  return (
    <div className={commonColumnsStyles.AppColumn}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {productsList.map((product) => (
            <li key={product.id}>
              <label onClick={() => postProductToShoppingList(product)}>
                {product.name}
              </label>
            </li>
          ))}
        </ul>
        {/* Poniżej znajduje się ostylowany aktywny produkt do zadania 5 */}
        {/* <span
          style={{
            backgroundColor: "white",
            border: "1px black solid",
            borderRadius: "16px",
            padding: "6px",
          }}
        >
          Przykładowy aktywny produkt
        </span> */}
      </header>
    </div>
  );
}

export default ProductsList;
