export default function Slider() {
  return (
    <>
      {/*Start Banner One*/}
      <section className="banner-one">
        <div
          className="banner-one__bg wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
          style={{
            backgroundImage: "url(assets/img/slider/banner-one__mian-img.jpg)",
          }}
        ></div>
        <div
          className="banner-one__bg-shape wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="border-box" />
        </div>
        <div className="banner-one__shape1">
          <img
            className="float-bob-y"
            src="assets/img/shape/banner-one__shape1.png"
            alt="#"
          />
        </div>
        <div
          className="banner-one__shape2 wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <img
            className="float-bob-y"
            src="assets/img/shape/banner-one__shape2.png"
            alt="#"
          />
        </div>
        <div className="container">
          <div
            className="banner-one__content wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="sub-title">
              <h5>Smart Solutions</h5>
            </div>
            <div className="big-title">
              <h2>
                Streamlined
                <br /> transportation for
                <br /> a better tomorrow
              </h2>
            </div>
            <div className="text">
              <p>
                We have been operating for over a decade, providing top-notch
              </p>
            </div>
            <div className="btn-box">
              <a className="thm-btn" href="#">
                <span className="txt">
                  Get In Touch
                  <i className="icon-next" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner One*/}
    </>
  );
}
