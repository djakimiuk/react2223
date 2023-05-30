import { useDispatch, useSelector } from "react-redux";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList.list);

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shopping List</p>
        <ul>
          {shoppingList.map((product) => (
            <li key={product.shoppingListId}>
              <label>{product.name}</label>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShoppingList;
