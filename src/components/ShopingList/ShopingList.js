import { useDispatch, useSelector } from "react-redux";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useEffect } from "react";
import axios from "axios";
import {
  loadShoppingList,
  setSelectedShoppingListProduct,
} from "../../redux/shoppingListSlice";
import * as consts from "../../consts/consts";

function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList.list);
  const dispatch = useDispatch();
  const getShoppingListFromApi = async () => {
    try {
      const response = await axios.get(`${consts.HOST}/products/shoppingList`);
      dispatch(loadShoppingList(response.data));
    } catch (error) {
      console.log(`There was an error ${error}`);
    }
  };

  const deleteProductFromShoppingList = async (product) => {
    try {
      dispatch(setSelectedShoppingListProduct(product));
      await axios.delete(`${consts.HOST}/products/shoppingList/${product.id}`);
      const response = await axios.get(`${consts.HOST}/products/shoppingList`);
      dispatch(loadShoppingList(response.data));
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  useEffect(() => {
    getShoppingListFromApi();
  }, []);

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shopping List</p>
        <ul>
          {shoppingList.map((product) => (
            <li key={product.id}>
              <label
                onClick={() => {
                  deleteProductFromShoppingList(product);
                }}
              >
                {product.name}
              </label>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShoppingList;