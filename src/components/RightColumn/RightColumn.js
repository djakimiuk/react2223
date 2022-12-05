import logo from '../.././logo.svg';
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

function RightColumn(props) {
  const { text = 'Missing text from props' } = props;

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
        <p>{text}</p>
      </header>
    </div>
  );
}

export default RightColumn;
