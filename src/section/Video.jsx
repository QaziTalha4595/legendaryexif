export default function Video() {
  return (
    <>
      {/*Start Video One*/}
      <section className="video-one">
        <div
          className="video-one__bg"
          data-jarallax
          data-speed="0.1"
          data-imgposition="0% 0%"
          style={{
            backgroundImage: "url(assets/img/resource/video-one__img1.jpg)",
          }}
        />
        <div
          className="icon wow zoomIn animated"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <a
            className="video-popup"
            title="Video Gallery"
            href="https://www.youtube.com/watch?v=06dV9txztKY"
          >
            <span className="icon-play-button-arrowhead" />
          </a>
        </div>
      </section>
      {/*End Video One*/}
    </>
  );
}
