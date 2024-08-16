import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <>
      {/*Start Main Header One */}
      <header className="main-header main-header-one ">
        <div id="sticky-header" className="menu-area">
          <div className="container">
            <div className="main-header-one__inner">
              {/*Start Main Header one Inner Left */}
              <div className="main-header-one__inner-left">
                <div className="logo-box-one">
                  <a href="index.html">
                    <img
                      src="assets/img/resource/Black-Legendary-logo.png"
                      alt="Logo"
                      style={{ height: "60px" }}
                    />
                  </a>
                </div>
              </div>
              {/*End Main Header one Inner Left */}
              {/*Start Main Header one Inner Right */}
              <div className="main-header-one__inner-right">
                {/*Start Main Header one Inner Right Top*/}
                <div className="main-header-one__inner-right__top">
                  <div className="header-contact-info-one">
                    <ul>
                      <li>
                        <div className="icon">
                          <span className="icon-open-mail" />
                        </div>
                        <p>
                          {/* <a href="mailto:Saud@legendaryexim.com">
                            Saud@legendaryexim.com
                          </a>
                          <a href="mailto:Naveed@legendaryexim.com">
                            Naveed@legendaryexim.com
                          </a> */}
                          <a href="mailto: info@legendaryexim.com">
                            info@legendaryexim.com
                          </a>
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-location-pin" />
                        </div>
                        <p>Aurangabad(431001),Maharashtra,India.</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-phone-call-1" />
                        </div>
                        <p>
                          <a href="tel:(91) 99220-30000">(91) 99220-30000</a>
                          <br />
                          <a href="tel:(91) 70288-00389">(91) 70288-00389</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="header-social-link-one">
                    <ul className="clearfix">
                      <li>
                        <a href="#">
                          <i className="icon-facebook-app-symbol" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-linked-in-logo-of-two-letters" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End Main Header one Inner Right Top*/}
                {/*Start Main Header one Inner Right Bottom*/}
                <div className="main-header-one__inner-right__bottom">
                  <div className="menu-area__inner">
                    <div className="mobile-nav-toggler">
                      <i className="fas fa-bars" />
                    </div>
                    <div className="menu-wrap">
                      <nav className="menu-nav">
                        <div className="navbar-wrap main-menu">
                          <ul className="navigation">
                            <li>
                              <a href="/">Home</a>
                            </li>
                            <li>
                              <a href="About">About</a>
                            </li>
                            <li>
                              <a href="Service">Services</a>
                            </li>
                            <li>
                              <a href="Contact">contacts</a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="main-menu-right-box-one">
                    <div className="side-content-button-one">
                      <a className="menu-tigger" href="#">
                        <span className="line" />
                        <span className="line two" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Main Header one Inner Right Bottom*/}
              </div>
              {/*End Main Header one Inner Right */}
            </div>
          </div>
        </div>
        {/*Start Mobile Menu  */}
        <div className="mobile-menu">
          <nav className="menu-box">
            <div className="close-btn">
              <i className="fas fa-times" />
            </div>
            <div className="nav-logo">
              <a href="index.html">
                <img
                  src="assets/img/resource/mobile-menu-logo.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="social-links">
              <ul className="clearfix list-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="menu-backdrop" />
        {/* End Mobile Menu */}
      </header>
      {/*End Main Header One */}
    </>
  );
}
