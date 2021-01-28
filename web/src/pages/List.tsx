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
        <h2 className="lists_username">
          Liste de cadeaux pour Jane Doe
          <img
            className="lists_avatar"
            alt="avatar of your friend"
            src={`./images/avatars/pexels-1.jpg`}
          />
        </h2>
        <p className="lists_add">Ajouter un cadeau <img className="lists_add_icon" alt="signe plus" src="./images/icons/plus.svg" ></img></p>

        <ul>
          <li className="lists_todo">
            <img
              className="lists_todo_gift"
              alt="gift"
              src={`./images/gifts/bag.jpg`}
            />
            <section className="lists_todo_infos">
              <p> sac à main </p>
              <p className="lists_todo_infos_link">https://acheter.com/sacamain</p>
              <p>29,30 CA$</p>
              <p>quantité : 1</p>
            </section>
            <section className="lists_todo_actions">
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/delete.svg"
              />
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/edit.svg"
              />
            </section>
          </li>

          <li className="lists_todo">
            <img
              className="lists_todo_gift"
              alt="gift"
              src={`./images/gifts/book.jpg`}
            />
            <section className="lists_todo_infos">
              <p> livre </p>
              <p className="lists_todo_infos_link">https://acheter.com/livre</p>
              <p>29,30 CA$</p>
              <p>quantité : 1</p>
            </section>
            <section className="lists_todo_actions">
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/delete.svg"
              />
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/edit.svg"
              />
            </section>
          </li>

          <li className="lists_todo">
            <img
              className="lists_todo_gift"
              alt="gift"
              src={`./images/gifts/bracelet.jpg`}
            />
            <section className="lists_todo_infos">
              <p> bracelet </p>
              <p className="lists_todo_infos_link">https://acheter.com/bracelet</p>
              <p>29,30 CA$</p>
              <p>quantité : 1</p>
            </section>
            <section className="lists_todo_actions">
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/delete.svg"
              />
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/edit.svg"
              />
            </section>
          </li>

          <li className="lists_todo">
            <img
              className="lists_todo_gift"
              alt="gift"
              src={`./images/gifts/vase.jpg`}
            />
            <section className="lists_todo_infos">
              <p> vase </p>
              <p className="lists_todo_infos_link">https://acheter.com/vase</p>
              <p>29,30 CA$</p>
              <p>quantité : 1</p>
            </section>
            <section className="lists_todo_actions">
              <img
                className="lists_todo_actions_img"
                alt="supprimer"
                src="./images/icons/delete.svg"
              />
              <img
                className="lists_todo_actions_img"
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
