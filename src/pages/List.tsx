function List({
  currentUserId,
  listsData,
  usersData,
  isLoading,
  isError,
}: any) {

  return (
    <main className="wrapper">
      <header className="wrapper_header">
        <h1 className="wrapper_header_title">
          {"Last lists from your friends -->"}{" "}
        </h1>
      </header>

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
              <img
                className="lists_bloc_todo_gift"
                alt="gift"
                src={`./images/gifts/bracelet.jpg`}
              />
              {"bracelet"}
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default List;
