import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadShoppingList } from "../../redux/shoppingListSlice";
import { setSelectedProduct } from "../../redux/productsSlice";
import { uniqueId } from "lodash";
import * as consts from "../../consts/consts";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products.filteredList);

  const postProductToShoppingList = async (product) => {
    try {
      await axios.post(`${consts.HOST}/products/shoppingList/new`, {
        ...product,
        id: uniqueId(),
      });
      const response = await axios.get(`${consts.HOST}/products/shoppingList`);
      dispatch(loadShoppingList(response.data));
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  const productDetailsHandle = async (id) => {
    try {
    const response = await axios.get(`${consts.HOST}/products/${id}`);
    dispatch(setSelectedProduct(response.data));
    navigate(`/products/details/${id}`);
    } catch (error) {
      console.log(`There was an error: ${error}`)
    }
  };

  return (
    <div className={commonColumnsStyles.AppColumn}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {productsList.map((product) => (
            <li key={product.id}>
              <label
                onClick={() => postProductToShoppingList(product)}
                onContextMenu={(e) => {
                  productDetailsHandle(product.id);
                  e.preventDefault();
                }}
              >
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
