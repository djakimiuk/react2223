import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Link to="/dashboard">
      <button>Sign In</button>
    </Link>
  );
};
