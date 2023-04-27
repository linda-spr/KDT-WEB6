import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <span>Router Tutorial</span>
      <div>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/products" className="menu-item">
          Product
        </Link>
      </div>
    </header>
  );
};

export default Header;
