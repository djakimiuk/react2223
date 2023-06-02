import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setFoodOnlyFilter,
  filterProducts,
  setInputFilter,
} from "../../redux/productsSlice";

function ProductsFilters() {
  const dispatch = useDispatch();
  const foodOnly = useSelector((state) => state.products.foodOnlyFilter);
  const inputFilter = useSelector((state) => state.products.inputFilterValue);

  const foodOnlyFilterHandle = (event) => {
    dispatch(setFoodOnlyFilter(event.target.checked));
    dispatch(filterProducts());
  };

  const inputFilterHandle = (event) => {
    dispatch(setInputFilter(event.target.value));
    dispatch(filterProducts());
  };

  return (
    <div className={styles.filtersHeaderWrapper}>
      <Typography variant="h4">Filtruj produkty: </Typography>
      <FormGroup>
        <div className={styles.filtersForm}>
          <FormControlLabel
            control={
              <TextField
                margin="dense"
                label="Nazwa"
                variant="outlined"
                value={inputFilter}
                onChange={inputFilterHandle}
              />
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Tylko produkty spożywcze"
            value={foodOnly}
            checked={foodOnly}
            onChange={foodOnlyFilterHandle}
          />
        </div>
      </FormGroup>
    </div>
  );
}

export default ProductsFilters;
