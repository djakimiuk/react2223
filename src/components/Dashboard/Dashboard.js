import ProductsList from "../ProductsList/ProductsList";
import shoppingList from "../ShopingList/ShopingList";
import styles from "../../App.module.scss";

function Dashboard() {
  return (
    <div className={styles.columnsWrapper}>
      <ProductsList />
      <shoppingList />
    </div>
  );
}

export default Dashboard;
