import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  filterProducts,
  loadProducts,
  setActiveProduct,
} from "../../redux/productsSlice";
import axios from "axios";

function Header(props) {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleLogoutButtonClick = () => {
    localStorage.removeItem("user");
  };

  const getProductsFromApi = async (path) => {
    try {
      const response = await axios.get(`http://localhost:9000/${path}`);
      const products = response.data;
      dispatch(loadProducts(products));
      dispatch(filterProducts());
      dispatch(setActiveProduct(products[0].id));
    } catch (error) {
      console.log(`There was an error: ${error.response.data.error}`);
    }
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.signedUserInfo}>
        <Typography sx={{ m: 2 }} variant="h5">
          Zalogowany:{" "}
          {`${currentUser.userfirstName} ${currentUser.userLastName}`}
        </Typography>
        <Button
          onClick={() => getProductsFromApi("products")}
          variant="contained"
        >
          Załaduj produkty
        </Button>
        <Link to="/">
          <Button
            onClick={handleLogoutButtonClick}
            variant="contained"
            color="error"
          >
            Wyloguj
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
