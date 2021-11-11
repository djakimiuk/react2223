import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function RightColumn() {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Right column</p>
      </header>
    </div>
  );
}

export default RightColumn;
