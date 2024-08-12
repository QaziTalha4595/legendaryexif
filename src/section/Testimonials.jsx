export default function Testinomials() {
  return (
    <>
      {/*Start Testimonials One*/}
      <section className="testimonials-one">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h4>clients Testomonial</h4>
            </div>
            <h2>
              Delivering excellence one
              <br />
              shipment at a time
            </h2>
          </div>
          <div className="testimonials-one__inner">
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{
                  "loop": true,
                  "pagination": {
                      "el": "#testimonial-one-pagination",
                      "type": "bullets",
                      "clickable": true
                      },
                  "navigation": {
                      "nextEl": "#testimonial-two__swiper-button-next",
                      "prevEl": "#testimonial-two__swiper-button-prev"
                  },
                  "autoplay": { "delay": 5000 },
                  "breakpoints": {
                      "0": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "375": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "575": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "768": {
                          "spaceBetween": 30,
                          "slidesPerView": 1
                      },
                      "992": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "1200": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      }
                  }}'
            >
              <div className="swiper-wrapper">
                {/*Start Single Testimonials One*/}
                <div className="swiper-slide">
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-img">
                      <div className="testimonials-one__single-img__inner">
                        <div className="inner">
                          <img
                            src="assets/img/testimonial/testimonials-one__img1.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="overlay-box">
                          <span className="icon-quote-right" />
                        </div>
                      </div>
                      <div className="title-box">
                        <h3>
                          <a href="#">Savannah Nguyen</a>
                        </h3>
                        <p>President of Sales</p>
                      </div>
                    </div>
                    <div className="testimonials-one__single-content">
                      <div className="ster-icon">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                        </ul>
                        <p>Reviews (05)</p>
                      </div>
                      <div className="text">
                        <p>
                          It is a long establishd fact that a reader will beinl
                          distracted by the hjli readable content of a page
                          jklilk when looking at its layout loren ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Testimonials One*/}
                {/*Start Single Testimonials One*/}
                <div className="swiper-slide">
                  <div className="testimonials-one__single">
                    <div className="testimonials-one__single-img">
                      <div className="testimonials-one__single-img__inner">
                        <div className="inner">
                          <img
                            src="assets/img/testimonial/testimonials-one__img2.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="overlay-box">
                          <span className="icon-quote-right" />
                        </div>
                      </div>
                      <div className="title-box">
                        <h3>
                          <a href="#">Savannah Nguyen</a>
                        </h3>
                        <p>President of Sales</p>
                      </div>
                    </div>
                    <div className="testimonials-one__single-content">
                      <div className="ster-icon">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-star-1" />
                            </div>
                          </li>
                        </ul>
                        <p>Reviews (05)</p>
                      </div>
                      <div className="text">
                        <p>
                          It is a long establishd fact that a reader will beinl
                          distracted by the hjli readable content of a page
                          jklilk when looking at its layout loren ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Testimonials One*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Testimonials One*/}
    </>
  );
}
