import logo from './../logo.svg';
import s from './header.module.css';

const Header = () => {
  return (
       <header className={s.head_logo}>
         <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'></img>

       </header>
  );
}

export default Header;