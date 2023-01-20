import './index.css';
import logo from 'assets/logo.svg';
import {useState} from 'react';

function HeaderMobile() {

  const [isOpen, setIsOpen] = useState(false)

  const modal = (<div className={`menu-popup`}>
    {['Features', 'Pricing', 'Resources'].map((nav)=>(<div className={`menu-popup-item`}>{nav}</div>))}
    <div className={'menu-popup-divider'}/>
    <div className={`menu-popup-item`}>Login</div>
    <div className={`menu-popup-item button button--rounded-lg button--size-lg button--type-primary`}>Sign Up</div>
  </div>)

  return (
      <div className={`header`}>
        <div className={`container`}>
          <div className={`header__body`}>
            <div className={`header__body-left`}>
              <img className={`header__logo`} src={logo} alt={""}/>
            </div>
            <div className={`header__body-right`}>
              <div className={`menu-button`} onClick={()=>{setIsOpen(!isOpen)}}>
                <div/><div/><div/>
              </div>
            </div>
          </div>
        </div>
        {isOpen && modal}
      </div>
  );
}

export default HeaderMobile;
