import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class LeftColumn extends React.Component {
  render() {
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Left column</p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
