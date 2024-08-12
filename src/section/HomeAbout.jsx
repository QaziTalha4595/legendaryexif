export default function HomeAbout() {
  return (
    <>
      {/*Start About One*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__img-box">
                <div className="about-one__img-box-overlay-bg" />
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/img/about/about-one__img1.jpg" alt="#" />
                </div>
                <div
                  className="about-one__overlay-box text-center wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="outer-box">
                    <div className="count-outer count-box">
                      <h2 className="odometer" data-count={10}>
                        00
                      </h2>
                      <i className="icon-add" />
                    </div>
                    <div className="title">
                      <p>Years of experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__content-box">
                <div className="sec-title">
                  <div className="sub-title">
                    <h4>About us</h4>
                  </div>
                  <h2>
                    Delivering efficiency one
                    <br />
                    mile at a time
                  </h2>
                </div>
                <div className="text">
                  <p>
                    We at legendary ship movers aims to deliver the best quality
                    of results possible for our clients. Established in
                    aurangabad, Maharashtra , we help the clients to fulfill
                    their requirements in a hassle free manner and which is
                    convenient to them. We supply the goods all over the world
                    in industry level fast timings to keep our clients
                    satisfied.
                  </p>
                </div>
                <ul>
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text-box">
                      <h3>Objective: </h3>
                      <p>
                        Our objective is to be the best at our work and justify
                        the name of our company by being the “legends” in this
                        field. We take care of the purchasing for the clients
                        and export it to them safely and as quickly as possible.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text-box">
                      <h3>Types of goods : </h3>
                      <p>
                        We export almost all kind of goods to all over the globe
                        especially Clothes ,Fabrics, Electronics ,Hosiery and
                        many more. We have expertise in gulf countries and also
                        ship to other countries to keep our clients satisfied
                        and confident.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End About One*/}
    </>
  );
}
