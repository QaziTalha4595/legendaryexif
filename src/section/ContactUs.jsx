import React, { useState } from "react";
import axios from "axios";
export default function ContactUS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const requestData = {
  //     name: name,
  //     email: "info@legendaryexim.com",
  //     number: number,
  //     message: `name: ${name} email: ${email}
  //     mesaage: ${message}
  //     `,
  //     subject: "Query from legendary exiv website ",
  //   };

  //   axios
  //     .post(
  //       "https://corsanywhere.herokuapp.com/https://api.graphicon.in/api/mail",
  //       requestData
  //     )
  //     .then(function (response) {
  //       console.log(response.data);
  //       // Handle successful response
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //       // Handle error
  //     });
  // };

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
                {/* onSubmit={handleSubmit} */}
                <form
                  action="f49abeb6-ea94-4875-b5a5-f227804f9ef6"
                  method="post"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        {/* // @ts-ignore
                      onChange={(e) => setName(e.target.value)} */}
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg=6">
                      <div className="contact-one__input-box">
                        {/* // @ts-ignore
                      onChange={(e) => setEmail(e.target.value)} */}
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-6">
                      <div className="contact-one__input-box">
                        {/* // @ts-ignore
                      onChange={(e) => setNumber(e.target.value)} */}
                        <input
                          type="number"
                          placeholder="Mobile"
                          name="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        {/* // @ts-ignore
                      onChange={(e) => setMessage(e.target.value)} */}
                        <textarea name="message" placeholder="Message" />
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
