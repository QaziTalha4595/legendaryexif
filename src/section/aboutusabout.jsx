export default function Aboutusabout() {
  return (
    <>
      <section className="about-two about-two--about">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-two__img">
                <ul>
                  <li
                    className="wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    {/*Single About Two Img*/}
                    <div className="single-about-two__img-box">
                      <img src="assets/img/about/about-two__img1.jpg" alt="#" />
                    </div>
                    {/*End About Two Img*/}
                  </li>
                  <li
                    className="wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    {/*Single About Two Img*/}
                    <div className="single-about-two__img-box">
                      <div className="inner">
                        <img
                          src="assets/img/about/about-two__img2.jpg"
                          alt="#"
                        />
                      </div>
                    </div>
                    {/*End About Two Img*/}
                    {/*Single About Two Img*/}
                    <div className="single-about-two__img-box">
                      <div className="inner">
                        <img
                          src="assets/img/about/about-two__img3.jpg"
                          alt="#"
                        />
                      </div>
                    </div>
                    {/*End About Two Img*/}
                  </li>
                </ul>
                <div className="overlay-box">
                  <div className="outer-box">
                    <div className="count-outer count-box">
                      <h2 className="odometer" data-count={10} />
                      <i className="fa-solid fa-plus" />
                    </div>
                    <div className="title">
                      <h4>Years Of Experiences</h4>
                    </div>
                    <div className="text">
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-two__contant-box">
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
                    It is a long established fact that a reader will be
                    distracted by the readablejk content of a page when looking
                    at its layout. Lorem Ipsum is simply dummyjl text of the
                    printing and typesetting industry.
                  </p>
                </div>
                <div className="about-one__futures1">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-cargo-ship" />
                      </div>
                      <h3>RealTimeLogistics</h3>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-packages3" />
                      </div>
                      <h3>OnPointLogistics</h3>
                    </li>
                  </ul>
                </div>
                <div className="about-one__list-item">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-check-mark" />
                      </div>
                      <p>
                        Mistakes To Avoid Lorem ipsum dolor sit amet consectetur
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check-mark" />
                      </div>
                      <p>Your Startup Lorem ipsum dolor sit amet consectetur</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check-mark" />
                      </div>
                      <p>
                        Knew About Fonts Lorem ipsum dolor sit amet consectetur
                      </p>
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
