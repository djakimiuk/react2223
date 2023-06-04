import { useDispatch, useSelector } from "react-redux";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useEffect } from "react";
import axios from "axios";
import {
  loadShoppingList,
  setSelectedShoppingListProduct,
  setshoppingListLoadingStatus,
} from "../../redux/shoppingListSlice";
import * as consts from "../../consts/consts";
import CircularProgress from "@mui/material/CircularProgress";

function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList.list);
  const dispatch = useDispatch();
  const loadingStatus = useSelector(
    (state) => state.shoppingList.shoppingListLoadingStatus
  );
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
      dispatch(setshoppingListLoadingStatus("loading"));
      await axios.delete(`${consts.HOST}/products/shoppingList/${product.id}`);
      const response = await axios.get(`${consts.HOST}/products/shoppingList`);
      dispatch(loadShoppingList(response.data));
      dispatch(setshoppingListLoadingStatus("success"));
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
          {loadingStatus === "loading" ? (
            <CircularProgress />
          ) : (
            shoppingList.map((product) => (
              <li key={product.id}>
                <label
                  onClick={() => {
                    deleteProductFromShoppingList(product);
                  }}
                >
                  {product.name}
                </label>
              </li>
            ))
          )}
        </ul>
      </header>
    </div>
  );
}

export default ShoppingList;
