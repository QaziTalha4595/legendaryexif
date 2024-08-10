export default function Stats() {
  return (
    <>
      {/*Start Fact Counter One*/}
      <section className="fact-counter-one">
        <div className="container">
          <div className="row">
            <div className="fact-counter_box">
              <ul className="clearfix">
                {/*Start Single Fact Counter*/}
                <li
                  className="single-fact-counter wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <span className="icon-delivery" />
                  </div>
                  <div className="outer-box">
                    <div className="count-outer count-box">
                      <h2 className="odometer" data-count={250}>
                        00
                      </h2>
                      <i className="icon-add" />
                    </div>
                    <div className="title">
                      <p>Team member</p>
                    </div>
                  </div>
                </li>
                {/*End Single Fact Counter*/}
                {/*Start Single Fact Counter*/}
                <li
                  className="single-fact-counter wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <span className="icon-package" />
                  </div>
                  <div className="outer-box">
                    <div className="count-outer count-box">
                      <h2 className="odometer" data-count={300}>
                        00
                      </h2>
                      <i className="icon-add" />
                    </div>
                    <div className="title">
                      <p>Complete projectr</p>
                    </div>
                  </div>
                </li>
                {/*End Single Fact Counter*/}
                {/*Start Single Fact Counter*/}
                <li
                  className="single-fact-counter wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <span className="icon-packages2" />
                  </div>
                  <div className="outer-box">
                    <div className="count-outer count-box">
                      <h2 className="odometer" data-count={450}>
                        00
                      </h2>
                      <i className="icon-add" />
                    </div>
                    <div className="title">
                      <p>Winning award</p>
                    </div>
                  </div>
                </li>
                {/*End Single Fact Counter*/}
                {/*Start Single Fact Counter*/}
                <li
                  className="single-fact-counter wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <span className="icon-delivery-truck" />
                  </div>
                  <div className="outer-box">
                    <div className="count-outer count-box">
                      <h2 className="odometer" data-count={1}>
                        00
                      </h2>
                      <i className="k">k</i>
                      <i className="icon-add" />
                    </div>
                    <div className="title">
                      <p>icon-delivery-truck</p>
                    </div>
                  </div>
                </li>
                {/*End Single Fact Counter*/}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*End Fact Counter One*/}
    </>
  );
}
