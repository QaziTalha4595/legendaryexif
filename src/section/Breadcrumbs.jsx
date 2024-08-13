import { h } from 'preact';
export default function Breadcrumbs({ pageTitle }) {
  return (
    <>
      <section className="page-header">
        <div className="page-header__img float-bob-y">
          <img src="assets/img/resource/page-header-img.png" alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{ pageTitle }</h2>
            <ul className="thm-breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span className="icon-left" />
              </li>
              <li>{ pageTitle }</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
