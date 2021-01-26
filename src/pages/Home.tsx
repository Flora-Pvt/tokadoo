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
        <div className="content">
          <div className="gallery">
            <div className="gallery__text">
              <span
                className="gallery__text-inner"
                data-scroll=""
                data-scroll-speed="3"
              >
                Tokadoo
              </span>
              <span
                data-scroll=""
                data-scroll-speed="1"
                className="gallery__text-inner--small"
              >
                partager une belle liste de cadeaux,
              </span>
              <p data-scroll=""
                data-scroll-speed="1"
                className="gallery__text-inner--small">garder la surprise jusqu'à la fin.</p>
            </div>

            <figure className="gallery__item">
              <div className="gallery__item-img">
                <div className="gallery__item-imginner">
                  <div className="lists_bloc">
                    <h3>Bienvenue sur la liste de Jane : </h3>
                    <h4 className="lists_bloc_username">
                      <img
                        className="lists_bloc_avatar"
                        alt="avatar of your friend"
                        src={`./images/avatars/pexels-1.jpg`}
                      />
                      {"Jane Doe"}
                    </h4>
                    <p>{"Ajoute ton premier souhait de cadeau :)"}</p>
                  </div>
                </div>
              </div>

              <figcaption className="gallery__item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll=""
                  data-scroll-speed="1"
                >
                  Crée ta liste
                </h2>
                <span className="gallery__item-number">01</span>
                <p className="gallery__item-tags">
                  <span>#house</span>
                  <span>#green</span>
                  <span>#chair</span>
                </p>
                <a className="gallery__item-link" href="# ">
                  explore
                </a>
              </figcaption>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__item-img">
                <div className="gallery__item-imginner">
                  <div className="lists_bloc">
                    <h3>Bienvenue sur la liste de Jane : </h3>
                    <h4 className="lists_bloc_username">
                      <img
                        className="lists_bloc_avatar"
                        alt="avatar of your friend"
                        src={`./images/avatars/pexels-1.jpg`}
                      />
                      {"Jane Doe"}
                    </h4>
                    <ul>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                        <img
                            className="lists_bloc_todo_gift"
                            alt="gift"
                            src={`./images/gifts/bag.jpg`}
                          />
                          {"sac à main"}
                        </p>
                        
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                        <img
                            className="lists_bloc_todo_gift"
                            alt="gift"
                            src={`./images/gifts/book.jpg`}
                          />
                          {"livre"}
                        
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                        <img
                            className="lists_bloc_todo_gift"
                            alt="gift"
                            src={`./images/gifts/vase.jpg`}
                          />
                          {"vase"}
                        
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                        <img
                            className="lists_bloc_todo_gift"
                            alt="gift"
                            src={`./images/gifts/bracelet.jpg`}
                          />
                          {"bracelet"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <figcaption className="gallery__item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll=""
                  data-scroll-speed="1"
                >
                  Ajoute tes articles
                </h2>
                <span className="gallery__item-number">02</span>
                <p className="gallery__item-tags">
                  <span>#love</span>
                  <span>#hug</span>
                  <span>#people</span>
                </p>
                <a className="gallery__item-link" href="# ">
                  explore
                </a>
              </figcaption>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__item-img">
                <div className="gallery__item-imginner">
                  <div className="lists_bloc">
                    <h3>Bienvenue sur la liste de Jane : </h3>
                    <h4 className="lists_bloc_username">
                      <img
                        className="lists_bloc_avatar"
                        alt="avatar of your friend"
                        src={`./images/avatars/pexels-1.jpg`}
                      />
                      {"Jane Doe"}
                    </h4>
                    <ul>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>

                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                    </ul>
                    <img className="lists_bloc_todo_icon" alt="logo twitter" src={`./images/icons/twitter.svg`} />
                    <img className="lists_bloc_todo_icon" alt="logo facebook" src={`./images/icons/facebook.svg`} />
                  </div>
                </div>
              </div>
              <figcaption className="gallery__item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll=""
                  data-scroll-speed="1"
                >
                  Partage à tes proches
                </h2>
                <span className="gallery__item-number">03</span>
                <p className="gallery__item-tags">
                  <span>#hike</span>
                  <span>#nature</span>
                  <span>#rain</span>
                </p>
                <a className="gallery__item-link" href="# ">
                  explore
                </a>
              </figcaption>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__item-img">
                <div className="gallery__item-imginner">
                  <div className="lists_bloc">
                    <h3>Bienvenue sur la liste de Jane : </h3>
                    <h4 className="lists_bloc_username">
                      <img
                        className="lists_bloc_avatar"
                        alt="avatar of your friend"
                        src={`./images/avatars/pexels-1.jpg`}
                      />
                      {"Jane Doe"}
                    </h4>
                    <ul>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-completed">
                          {"todo fini !"}
                          <img
                            className="lists_bloc_todo_avatar"
                            alt="avatar of your friend"
                            src={`./images/avatars/pexels-2.jpg`}
                          />
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-completed">
                          {"todo fini !"}
                          <img
                            className="lists_bloc_todo_avatar"
                            alt="avatar of your friend"
                            src={`./images/avatars/pexels-3.jpg`}
                          />
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                      <li className="lists_bloc_todo">
                        <p className="lists_bloc_todo-incomplete">
                          {"todo à offrir"}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <figcaption className="gallery__item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll=""
                  data-scroll-speed="1"
                >
                  Garde la surprise
                </h2>
                <span className="gallery__item-number">04</span>
                <p className="gallery__item-tags">
                  <span>#hike</span>
                  <span>#nature</span>
                  <span>#rain</span>
                </p>
                <a className="gallery__item-link" href="# ">
                  explore
                </a>
              </figcaption>
            </figure>

            <div className="gallery__text">
              <p
                className="gallery__text-inner--small"
                data-scroll=""
                data-scroll-speed="1"
              >
                Crée ta liste
              </p>
              <button
                data-scroll=""
                data-scroll-speed="3"
                className="gallery__text-inner--small"
              >
                maintenant !
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
