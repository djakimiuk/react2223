import { useSelector } from "react-redux";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.products.selectedProduct);
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <p>Product Details</p>
        <ul>
          <li>ID produktu: {productDetails.id}</li>
          <li>Nazwa produktu: {productDetails.name}</li>
          <li>Kategoria produktu: {productDetails.category}</li>
          <li>Produkt spożywczy: {productDetails.isFood ? "tak" : "nie"}</li>
        </ul>
      </header>
    </div>
  );
};

export default ProductDetails;
