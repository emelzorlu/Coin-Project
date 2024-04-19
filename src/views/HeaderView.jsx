import { Link, NavLink } from 'react-router-dom';

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center">
      <Link to={'/home'} className="d-flex gap-3 align-items-center text-decoration-none ">
        <img height={40} src="/c-logo.png" />
        <h3 className="text-black  ">Coin-Platform</h3>
      </Link>

      <nav className="d-flex gap-3 ">
        <NavLink className={'text-black text-decoration-none'} to={'/'}>
          Giriş Yap
        </NavLink>
        <NavLink className={'text-black text-decoration-none'} to={'/home'}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;