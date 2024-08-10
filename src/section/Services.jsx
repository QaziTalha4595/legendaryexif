export default function Services() {
  return (
    <>
      {/*Start Service One*/}
      <section className="service-one">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h4>Latest Service</h4>
            </div>
            <h2>
              Logistics made simple transportation
              <br /> made easy In Touch
            </h2>
          </div>
          <div className="row">
            {/*Start Single Service One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single">
                <div className="service-one__single-icon-box">
                  <div className="left-icon-box">
                    <span className="icon-cargo-ship" />
                  </div>
                  <div className="right-icon-box">
                    <a href="service-details.html">
                      <span className="icon-next" />
                    </a>
                  </div>
                </div>
                <div className="service-one__single-content">
                  <h3>
                    <a href="service-details.html">Swift Cargo</a>
                  </h3>
                  <p>
                    Lorem Ipsum isly dummy text of the printing Lorem Ipsum is
                    simply dummy text of the printing no one can
                  </p>
                </div>
              </div>
            </div>
            {/*End Single Service One*/}
            {/*Start Single Service One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single">
                <div className="service-one__single-icon-box">
                  <div className="left-icon-box">
                    <span className="icon-packages3" />
                  </div>
                  <div className="right-icon-box">
                    <a href="service-details.html">
                      <span className="icon-next" />
                    </a>
                  </div>
                </div>
                <div className="service-one__single-content">
                  <h3>
                    <a href="service-details.html">Cargo Xpress</a>
                  </h3>
                  <p>
                    Lorem Ipsum isly dummy text of the printing Lorem Ipsum is
                    simply dummy text of the printing no one can
                  </p>
                </div>
              </div>
            </div>
            {/*End Single Service One*/}
            {/*Start Single Service One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-4 wow fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single">
                <div className="service-one__single-icon-box">
                  <div className="left-icon-box">
                    <span className="icon-protected" />
                  </div>
                  <div className="right-icon-box">
                    <a href="service-details.html">
                      <span className="icon-next" />
                    </a>
                  </div>
                </div>
                <div className="service-one__single-content">
                  <h3>
                    <a href="service-details.html">Aero Freight</a>
                  </h3>
                  <p>
                    Lorem Ipsum isly dummy text of the printing Lorem Ipsum is
                    simply dummy text of the printing no one can
                  </p>
                </div>
              </div>
            </div>
            {/*End Single Service One*/}
          </div>
        </div>
      </section>
      {/*End Service One*/}
    </>
  );
}
