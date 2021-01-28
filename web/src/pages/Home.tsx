import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
    });
  }, []);

  return (
    <>
      <main data-scroll-container="">
        <div className="home">
          <div className="home__text">
            <span
              className="home__text-inner"
              data-scroll=""
              data-scroll-speed="3"
            >
              Tokadoo
              </span>
            <span
              data-scroll=""
              data-scroll-speed="1"
              className="home__text-inner--small"
            >
              partager une belle liste de cadeaux,
              </span>
            <p
              data-scroll=""
              data-scroll-speed="1"
              className="home__text-inner--small"
            >
              garder la surprise jusqu'à la fin.
              </p>
          </div>

          <figure className="home__item">
            <div className="home__item-list">
              <div className="lists">
                <h2 className="lists__username">
                  Liste de cadeaux pour Jane Doe
                      <img
                    className="lists__avatar"
                    alt="avatar of your friend"
                    src={`./images/avatars/pexels-1.jpg`}
                  />
                </h2>
                <p className="lists__add">
                  Ajouter ton premier cadeau !
                      <img
                    className="lists__add__icon"
                    alt="signe plus"
                    src="./images/icons/plus.svg"
                  ></img>
                </p>
              </div>
            </div>


            <figcaption className="home__item-caption">
              <h2
                className="home__item-title"
                data-scroll=""
                data-scroll-speed="1"
              >
                Crée ta liste
                </h2>
              <span className="home__item-number">01</span>
            </figcaption>
          </figure>

          <figure className="home__item">
            <div className="home__item-list">
              <div className="home__item-listinner">
                <div className="lists">
                  <h2 className="lists__username">
                    Liste de cadeaux pour Jane Doe
                      <img
                      className="lists__avatar"
                      alt="avatar of your friend"
                      src={`./images/avatars/pexels-1.jpg`}
                    />
                  </h2>
                  <p className="lists__add">
                    Ajouter un cadeau{" "}
                    <img
                      className="lists__add__icon"
                      alt="signe plus"
                      src="./images/icons/plus.svg"
                    ></img>
                  </p>

                  <ul>
                    <li className="lists__todo">
                      <img
                        className="lists__todo__gift"
                        alt="gift"
                        src={`./images/gifts/bag.jpg`}
                      />
                      <section className="lists__todo__infos">
                        <p> sac à main </p>
                        <p className="lists__todo__infos__link">
                          https://acheter.com/sacamain
                          </p>
                        <p>29,30 CA$</p>
                        <p>quantité : 1</p>
                      </section>
                      <section className="lists__todo__actions">
                        <img
                          className="lists__todo__actions__img"
                          alt="supprimer"
                          src="./images/icons/delete.svg"
                        />
                        <img
                          className="lists__todo__actions__img"
                          alt="supprimer"
                          src="./images/icons/edit.svg"
                        />
                      </section>
                    </li>

                    <li className="lists__todo">
                      <img
                        className="lists__todo__gift"
                        alt="gift"
                        src={`./images/gifts/book.jpg`}
                      />
                      <section className="lists__todo__infos">
                        <p> livre </p>
                        <p className="lists__todo__infos__link">
                          https://acheter.com/livre
                          </p>
                        <p>29,30 CA$</p>
                        <p>quantité : 1</p>
                      </section>
                      <section className="lists__todo__actions">
                        <img
                          className="lists__todo__actions__img"
                          alt="supprimer"
                          src="./images/icons/delete.svg"
                        />
                        <img
                          className="lists__todo__actions__img"
                          alt="supprimer"
                          src="./images/icons/edit.svg"
                        />
                      </section>
                    </li>

                    <li className="lists__todo">
                      <img
                        className="lists__todo__gift"
                        alt="gift"
                        src={`./images/gifts/bracelet.jpg`}
                      />
                      <section className="lists__todo__infos">
                        <p> bracelet </p>
                        <p className="lists__todo__infos__link">
                          https://acheter.com/bracelet
                          </p>
                        <p>29,30 CA$</p>
                        <p>quantité : 1</p>
                      </section>
                      <section className="lists__todo__actions">
                        <img
                          className="lists__todo__actions__img"
                          alt="supprimer"
                          src="./images/icons/delete.svg"
                        />
                        <img
                          className="lists__todo__actions__img"
                          alt="supprimer"
                          src="./images/icons/edit.svg"
                        />
                      </section>
                    </li>


                  </ul>
                </div>
              </div>
            </div>
            <figcaption className="home__item-caption">
              <h2
                className="home__item-title"
                data-scroll=""
                data-scroll-speed="1"
              >
                Ajoute tes articles
                </h2>
              <span className="home__item-number">02</span>
            </figcaption>
          </figure>

          <figure className="home__item">
            <div className="home__item-list">
              <div className="home__item-listinner">
                <div className="lists">
                  <img
                    className="lists__todo__icon"
                    alt="logo facebook"
                    src={`./images/icons/facebook.svg`}
                  />
                  <img
                    className="lists__todo__icon"
                    alt="logo twitter"
                    src={`./images/icons/twitter.svg`}
                  />
                  <img
                    className="lists__todo__icon"
                    alt="logo linkedin"
                    src={`./images/icons/linkedin(1).svg`}
                  />
                  <img
                    className="lists__todo__icon"
                    alt="logo whatsapp"
                    src={`./images/icons/whatsapp.svg`}
                  />

                </div>
              </div>
            </div>
            <figcaption className="home__item-caption">
              <h2
                className="home__item-title"
                data-scroll=""
                data-scroll-speed="1"
              >
                Partage à tes proches
                </h2>
              <span className="home__item-number">03</span>
            </figcaption>
          </figure>

          <div className="home__text">
            <p
              className="home__text-inner--small"
              data-scroll=""
              data-scroll-speed="1"
            >
              Crée ta liste
              </p>
            <a
              data-scroll=""
              data-scroll-speed="3"
              className="home__text-inner--small-link"
              href="/home"
            >
              {"maintenant :)"}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
