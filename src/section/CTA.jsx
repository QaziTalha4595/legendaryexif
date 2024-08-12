export default function CTA() {
  return (
    <>
      {/*Start Cta One*/}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner">
            <div className="cta-one__inner-box">
              <div className="title-box">
                <h2>Logistics Solutions for Success</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="cta-one__newsletter-box">
              <form action="index.html" method="post">
                <div className="cta-one__form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    required
                  />
                  <button className="thm-btn" type="submit">
                    <span className="txt">
                      <i className="icon-paper-plane" />
                      Browse More
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*End Cta One*/}
    </>
  );
}
