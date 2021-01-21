function Lists({ currentUserId, listsData, usersData, isLoading, isError }: any) {

  const displayUser = (userTodos: [{ userId: number }]) => {
    for (let i = 0; i < userTodos.length; i++) {
      return (
        <>
          <h2 className="lists_bloc_username" key={userTodos[i].userId}>
            <img className="lists_bloc_avatar" alt="avatar of your friend" src={`./avatars/pexels-${userTodos[i].userId}.jpg`} />
            {usersData[userTodos[i].userId - 1].username}</h2>
        </>)
    }
  }

  return (
    <main className="wrapper">
      <header className="wrapper_header" >
        <h1 className="wrapper_header_title">{"Last lists from your friends -->"} </h1>
      </header>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul className="lists">{listsData.map((userTodos: [{ userId: number, id: number, title: string, completed: boolean }], index: number) => {
            if (currentUserId === userTodos[currentUserId - 1].userId) {
              return null
            } else {
              return (
                <li className="lists_bloc" key={index}>
                  {displayUser(userTodos)}
                  <ul>
                    {userTodos.map((todo: { id: number, title: string, completed: boolean }) => {
                      return <li key={todo.id}>
                        {!todo.completed ?
                          <p className="lists_bloc_todo">{todo.title}</p>
                          : <p className="lists_bloc_todo-completed">{todo.title}<img className="lists_bloc_todo_avatar" alt="avatar of your friend" src={`./avatars/pexels-${Math.floor(Math.random() * Math.floor(10))}.jpg`} /></p>
                        }

                      </li>
                    })}
                  </ul>
                </li>
              )
            }
          })}
          </ul>)}
    </main>
  );
}

export default Lists;