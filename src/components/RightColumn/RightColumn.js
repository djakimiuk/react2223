import commonColumnsStyles from '../../common/styles/Columns.module.scss';

function RightColumn(props) {
  const buttonText = 'Double click should reset a timer';

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}> {buttonText} </button>
        <p>Right column</p>
      </header>
    </div>
  );
}

export default RightColumn;
