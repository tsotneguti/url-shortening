import './index.css';
import illustration from 'assets/illustration-working.svg';

function Hero() {
  return (
      <div className={`hero`}>
        <div className={`container`}>
          <div className={`hero__body`}>
            <div className={`hero__left`}>
              <div className={`hero__title`}>More than just shorter links</div>
              <div className={`hero__subtitle`}> Build test test test test test
                test test 123 12 12 12 12
              </div>
              <div
                  className={`button button--type-primary button--rounded-lg`}>Get
                started
              </div>
            </div>
            <div className={`hero__right`}>
              <img src={illustration} alt={''}
                   className={`hero__illustration`}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Hero;
