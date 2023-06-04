import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  loadShoppingList,
  setshoppingListLoadingStatus,
} from "../../redux/shoppingListSlice";
import {
  setActiveProduct,
  setSelectedProduct,
} from "../../redux/productsSlice";
import { uniqueId } from "lodash";
import * as consts from "../../consts/consts";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products.filteredList);
  const activeProduct = useSelector((state) => state.products.activeProduct);
  const ref = useRef(null);
  const lastIndex = productsList.length - 1;

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        if (activeProduct === +productsList[lastIndex].id) {
          dispatch(setActiveProduct(+productsList[0].id));
        } else dispatch(setActiveProduct(activeProduct + 1));
        break;
      case "ArrowUp":
        if (activeProduct === +productsList[0].id) {
          dispatch(setActiveProduct(+productsList[lastIndex].id));
        } else dispatch(setActiveProduct(activeProduct - 1));
        break;
      case "d":
        productDetailsHandle(activeProduct);
        break;
      default:
        dispatch(setActiveProduct(activeProduct));
    }
  };

  const postProductToShoppingList = async (product) => {
    try {
      dispatch(setshoppingListLoadingStatus("loading"));
      await axios.post(`${consts.HOST}/products/shoppingList/new`, {
        ...product,
        id: uniqueId() + Date.now(),
      });
      const response = await axios.get(`${consts.HOST}/products/shoppingList`);
      dispatch(loadShoppingList(response.data));
      dispatch(setshoppingListLoadingStatus("success"));
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  const productDetailsHandle = async (id) => {
    try {
      dispatch(setshoppingListLoadingStatus("loading"));
      const response = await axios.get(`${consts.HOST}/products/${id}`);
      dispatch(setSelectedProduct(response.data));
      dispatch(setshoppingListLoadingStatus("success"));
      navigate(`/products/details/${id}`);
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  useEffect(() => {
    if (productsList.length > 0) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className={commonColumnsStyles.AppColumn}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {productsList.map((product) => (
            <li
            data-testid="productList-item"
              ref={ref}
              tabIndex={-1}
              onKeyDown={handleKeyDown}
              key={product.id}
              style={
                +product.id === activeProduct
                  ? {
                      backgroundColor: "white",
                      border: "1px black solid",
                      borderRadius: "16px",
                      padding: "6px",
                    }
                  : {}
              }
            >
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
      </header>
    </div>
  );
}

export default ProductsList;
