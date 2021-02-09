import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

function List({ currentUserId, listData, usersData, isLoading, isError }: any) {
  const infosRef = useRef({});

  const gifts = useMemo(
    () => [
      {
        image: "bag.jpg",
        name: "Sac à main",
        link: "https://acheter.com/sacamain",
        price: "29.30",
        quantity: "1",
      },
      {
        image: "book.jpg",
        name: "My secret plan to rule the world",
        link: "https://acheter.com/mysecretplan",
        price: "29.30",
        quantity: "1",
      },
      {
        image: "bracelet.jpg",
        name: "Bracelet élégant",
        link: "https://acheter.com/bracelet",
        price: "29.30",
        quantity: "1",
      },
      {
        image: "vase.jpg",
        name: "Vase design",
        link: "https://acheter.com/vase",
        price: "29.30",
        quantity: "1",
      },
    ],
    []
  );

  useEffect(() => {
    gifts.map((gift) => {
      return gsap.set(infosRef.current[gift.name], { yPercent: 0 });
    });
  }, [gifts]);

  const handleMouseEnter = (ref) => {
    let tl = gsap.timeline({ pause: true });
    tl.from(ref, { yPercent: 0 });
    tl.to(ref, { yPercent: -100 });
    tl.play();
  };
  const handleMouseOut = (ref) => {
    let tl = gsap.timeline({ pause: true });
    tl.from(ref, { yPercent: -100 });
    tl.to(ref, { yPercent: 0 });
    tl.play();
  };

  return (
    <main className="wrapper">
      <div className="list">
        <header className="list__header">
          <h2 className="list__header__username">
            Liste des cadeaux pour Jane Doe
            <img
              className="list__header__avatar"
              alt="avatar of your friend"
              src={`./images/avatars/pexels-1.jpg`}
            />
          </h2>
          {/*<p className="list__header__add">
            Ajouter un cadeau{" "}
            <img
              className="list__header__add__icon"
              alt="signe plus"
              src="./images/icons/plus.svg"
            ></img>
          </p>*/}
        </header>

        <ul className="list__container">
          {gifts.map((gift, i) => (
            <li
              key={i}
              className="list__todo"
              onMouseEnter={() => handleMouseEnter(infosRef.current[gift.name])}
            >
              <div
                className="list__todo__gift"
                style={{
                  backgroundImage: `url(../../images/gifts/${gift.image})`,
                }}
              >
                <section
                  className="list__todo__infos"
                  ref={(el) => (infosRef.current[gift.name] = el)}
                  onMouseOut={() => handleMouseOut(infosRef.current[gift.name])}
                >
                  <p className="list__todo__infos__title">{gift.name} </p>
                  <p>{gift.price} CA$</p>
                  <p>Quantité : {gift.quantity}</p>
                  {/*<img
                    className="list__todo__actions__img"
                    alt="supprimer"
                    src="./images/icons/delete.svg"
                  />
                  <img
                    className="list__todo__actions__img"
                    alt="supprimer"
                    src="./images/icons/edit.svg"
                  />*/}
                  <p className="list__todo__infos__buy">
                    Envie d'acheter ce cadeau ? Rends-toi ici :{" "}
                    <a href={gift.link} className="list__todo__infos__link">
                      {gift.link}
                    </a>
                  </p>
                </section>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default List;
