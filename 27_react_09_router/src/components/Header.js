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

        {/* 실습 */}
        <Link to="/student/sean" className="menu-item">
          학생
        </Link>
        <Link to="/student/codingon" className="menu-item">
          코딩온
        </Link>
        <Link to="/student/new?name=jisu" className="menu-item">
          searchParams
        </Link>
      </div>
    </header>
  );
};

export default Header;
