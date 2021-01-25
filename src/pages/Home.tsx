import { useEffect } from "react"
import LocomotiveScroll from 'locomotive-scroll'

function Home() {

  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal"
    });
  }, [])

  const imgUrl = "avatars/pexels-1.jpg"
  const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  };

  return (
    <>
      <main data-scroll-container="">
        <div className="content">
          <div className="gallery">
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Funambulist</h2>
                <span className="gallery__item-number">01</span>
                <p className="gallery__item-tags">
                  <span>#house</span>
                  <span>#green</span>
                  <span>#chair</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Omophagy</h2>
                <span className="gallery__item-number">02</span>
                <p className="gallery__item-tags">
                  <span>#love</span>
                  <span>#hug</span>
                  <span>#people</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Conniption</h2>
                <span className="gallery__item-number">03</span>
                <p className="gallery__item-tags">
                  <span>#hike</span>
                  <span>#nature</span>
                  <span>#rain</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Xenology</h2>
                <span className="gallery__item-number">04</span>
                <p className="gallery__item-tags">
                  <span>#free</span>
                  <span>#wood</span>
                  <span>#fire</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <div className="gallery__text"><span className="gallery__text-inner" data-scroll="" data-scroll-speed="3">Pollex</span><span data-scroll="" data-scroll-speed="1" className="gallery__text-inner">Mallam</span></div>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Lycanthropy</h2>
                <span className="gallery__item-number">05</span>
                <p className="gallery__item-tags">
                  <span>#cloud</span>
                  <span>#lake</span>
                  <span>#frog</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Mudlark</h2>
                <span className="gallery__item-number">06</span>
                <p className="gallery__item-tags">
                  <span>#tent</span>
                  <span>#flower</span>
                  <span>#love</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Illywhacker</h2>
                <span className="gallery__item-number">07</span>
                <p className="gallery__item-tags">
                  <span>#water</span>
                  <span>#bottle</span>
                  <span>#hand</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Disenthral</h2>
                <span className="gallery__item-number">08</span>
                <p className="gallery__item-tags">
                  <span>#night</span>
                  <span>#stars</span>
                  <span>#moon</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <div className="gallery__text"><span className="gallery__text-inner" data-scroll="" data-scroll-speed="1">Cacoe</span><span data-scroll="" data-scroll-speed="3" className="gallery__text-inner">Dupis</span></div>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Abaya</h2>
                <span className="gallery__item-number">09</span>
                <p className="gallery__item-tags">
                  <span>#sun</span>
                  <span>#light</span>
                  <span>#air</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Hallux</h2>
                <span className="gallery__item-number">10</span>
                <p className="gallery__item-tags">
                  <span>#vital</span>
                  <span>#fog</span>
                  <span>#close</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Lablab</h2>
                <span className="gallery__item-number">11</span>
                <p className="gallery__item-tags">
                  <span>#cover</span>
                  <span>#bed</span>
                  <span>#window</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <figure className="gallery__item">
              <div className="gallery__item-img"><div className="gallery__item-imginner" style={divStyle}></div></div>
              <figcaption className="gallery__item-caption">
                <h2 className="gallery__item-title" data-scroll="" data-scroll-speed="1">Momisom</h2>
                <span className="gallery__item-number">12</span>
                <p className="gallery__item-tags">
                  <span>#sad</span>
                  <span>#mouth</span>
                  <span>#tear</span>
                </p>
                <a className="gallery__item-link" href="# ">explore</a>
              </figcaption>
            </figure>
            <div className="gallery__text"><span className="gallery__text-inner" data-scroll="" data-scroll-speed="4">Chad</span><span data-scroll="" data-scroll-speed="1" className="gallery__text-inner">Chiliad</span></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
