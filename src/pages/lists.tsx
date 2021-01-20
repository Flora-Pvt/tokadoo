function Lists({ currentUserId, listsData, usersData, isLoading, isError }: any) {

  const displayUser = (userTodos: [{ userId: number }]) => {
    for (let i = 0; i < userTodos.length; i++) {
      return (
        <>
          <h2 key={userTodos[i].userId}>{usersData[userTodos[i].userId - 1].username}</h2>
        </>)
    }
  }

  return (
    <>
      <h1>Last lists from your friends : </h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul>{listsData.map((userTodos: [{ userId: number, id: number, title: string, completed: boolean }], index: number) => {
            if (currentUserId === userTodos[currentUserId - 1].userId) {
              return null
            } else {
              return (
                <li key={index}>
                  {displayUser(userTodos)}
                  <ul>
                    {userTodos.map((todo: { id: number, title: string, completed: boolean }) => {
                      return <li key={todo.id}>
                        <label htmlFor="todo" key={todo.id}>{todo.title}</label>
                        <progress id="todo" value={todo.completed ? "1" : "0"}></progress>
                      </li>
                    })}
                  </ul>
                </li>
              )
            }
          })}
          </ul>)}
    </>
  );
}

export default Lists;