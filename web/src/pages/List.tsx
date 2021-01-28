function List({
  currentUserId,
  listsData,
  usersData,
  isLoading,
  isError,
}: any) {
  return (
    <main className="wrapper">
      <div className="lists">
        <h2 className="lists__username">
          Liste de cadeaux pour Jane Doe
          <img
            className="lists__avatar"
            alt="avatar of your friend"
            src={`./images/avatars/pexels-1.jpg`}
          />
        </h2>
        <p className="lists__add">Ajouter un cadeau <img className="lists__add__icon" alt="signe plus" src="./images/icons/plus.svg" ></img></p>

        <ul>
          <li className="lists__todo">
            <img
              className="lists__todo__gift"
              alt="gift"
              src={`./images/gifts/bag.jpg`}
            />
            <section className="lists__todo__infos">
              <p> sac à main </p>
              <p className="lists__todo__infos__link">https://acheter.com/sacamain</p>
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
              <p className="lists__todo__infos__link">https://acheter.com/livre</p>
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
              <p className="lists__todo__infos__link">https://acheter.com/bracelet</p>
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
              src={`./images/gifts/vase.jpg`}
            />
            <section className="lists__todo__infos">
              <p> vase </p>
              <p className="lists__todo__infos__link">https://acheter.com/vase</p>
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
    </main>
  );
}

export default List;
