import './index.css';
import { useMediaQuery } from 'react-responsive'
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';

function Header() {
  const isNotMobile = useMediaQuery({
    query: '(min-width: 600px)'
  })
  return (
        isNotMobile ? <HeaderDesktop/> : <HeaderMobile/>
  );
}

export default Header;
