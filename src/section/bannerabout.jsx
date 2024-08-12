export default function Bannerabout() {
    return (
      <>
        <section className="page-header">
          <div className="page-header__img float-bob-y">
            <img src="assets/img/resource/page-header-img.png" alt="" />
          </div>
          <div className="container">
            <div className="page-header__inner">
              <h2>About Us</h2>
              <ul className="thm-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span className="icon-left" />
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
}