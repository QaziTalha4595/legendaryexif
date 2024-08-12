export default function Clients() {
  return (
    <>
      {/*Start Partner style1*/}
      <div className="partner-style1">
        <div className="container">
          <div className="brand-content">
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{
                  "spaceBetween": 30,
                  "slidesPerView": 2,
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
                          "slidesPerView": 2
                      },
                      "768": {
                          "spaceBetween": 30,
                          "slidesPerView": 4
                      },
                      "992": {
                          "spaceBetween": 30,
                          "slidesPerView": 5
                      },
                      "1200": {
                          "spaceBetween": 30,
                          "slidesPerView": 6
                      }
                  }}'
            >
              <div className="swiper-wrapper">
                {/*Start Single Partner Logo Box*/}
                <div className="swiper-slide">
                  <div className="single-partner-logo-box">
                    <a href="#">
                      <img
                        src="assets/img/brand/brand-v1-1.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <div className="swiper-slide">
                  <div className="single-partner-logo-box">
                    <a href="#">
                      <img
                        src="assets/img/brand/brand-v1-2.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <div className="swiper-slide">
                  <div className="single-partner-logo-box">
                    <a href="#">
                      <img
                        src="assets/img/brand/brand-v1-3.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <div className="swiper-slide">
                  <div className="single-partner-logo-box">
                    <a href="#">
                      <img
                        src="assets/img/brand/brand-v1-4.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <div className="swiper-slide">
                  <div className="single-partner-logo-box">
                    <a href="#">
                      <img
                        src="assets/img/brand/brand-v1-5.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <div className="swiper-slide">
                  <div className="single-partner-logo-box">
                    <a href="#">
                      <img
                        src="assets/img/brand/brand-v1-2.png"
                        alt="Awesome Image"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Partner Logo Box*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Partner style1*/}
    </>
  );
}
