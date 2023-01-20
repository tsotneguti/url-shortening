import './index.css';
import logo from 'assets/logo.svg'

function HeaderDesktop() {
  return (
      <div className={`header`}>
        <div className={`container`}>
          <div className={`header__body`}>
            <div className={`header__body-left`}>
              <img className={`header__logo`} src={logo} alt={""}/>
              <div className={`header__nav`}>
                {['Features', 'Pricing', 'Resources'].map(
                    (item) => (<div className={'header__nav-item'}>{item}</div>))}
              </div>
            </div>
            <div className={`header__body-right`}>
              <div className={`button`}>Login</div>
              <div className={`button button--type-primary button--rounded-lg`}>Sign up</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HeaderDesktop;
