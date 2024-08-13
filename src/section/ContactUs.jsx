export default function ContactUS() {
  return (
    <>
      <section className="contact-one">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h4>Contact us</h4>
            </div>
            <h2>Get in Touch With Us</h2>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="contact-one__list-item">
                <ul>
                  <li>
                    <div className="icon">
                      <span className="icon-location-pin" />
                    </div>
                    <div className="text">
                      <h4>Address</h4>
                      <p>
                        5-28-119, Kashan-E-Rehman, Diamond Silk Mills Compound,
                        Near West Side Of Flyover Bridge, Paithan Road,
                        Aurangabad-431005 (MS).
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-phone-call-1" />
                    </div>
                    <div className="text">
                      <h4>Lets Talk us</h4>
                      <p>
                        Phone number:{" "}
                        <a href="tel:(91) 70288-00389">(91) 70288-00389</a>
                      </p>
                      <p>
                        Phone Number:{" "}
                        <a href="tel:(91) 99220-30000">(91) 99220-30000</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-envelope" />
                    </div>
                    <div className="text">
                      <h4>Send us email</h4>
                      <p>
                        <a href="mailto: info@legendaryexim.com">
                          info@legendaryexim.com
                        </a>
                      </p>
                      <p>
                        <a href="mailto:Saud@legendaryexim.com">
                          Saud@legendaryexim.com
                        </a>
                      </p>
                      <p>
                        <a href="mailto:Naveed@legendaryexim.com">
                          Naveed@legendaryexim.com
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="contact-one__form">
                <form
                  id="contact-form"
                  action="assets/inc/mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="number"
                          placeholder="Mobile"
                          name="number"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="Company"
                          name="company"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Messege"
                          defaultValue={""}
                        />
                      </div>
                      <div className="contact-one__btn-box">
                        <button
                          className="thm-btn"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span className="txt">Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="ajax-response mb-0" />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="contact-one__socel-link">
                <div className="contact-one__socel-link-inner">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color1">
                        <span className="icon-facebook-app-symbol" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color2">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
