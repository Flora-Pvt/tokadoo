import { useState, useEffect } from 'react';
import listsService from "../services/listsService"

function Lists() {
  const [data, setData]: any[] = useState([]);

  useEffect(() => {
    listsService.getLists().then(lists => {

      // group todos with same userId in array
      let listsArray = []
      for (let i = 0; i < lists[lists.length - 1].userId; i++) {
        let userList = lists.filter((list: { userId: number }) => list.userId === i)
        listsArray.push(userList)
      }

      setData(listsArray)
    })
  }, [])

  const displayUserId = (userTodos: [{ userId: number }]) => {
    for (let i = 0; i < userTodos.length; i++) {
      return <h2 key={userTodos[i].userId}>{userTodos[i].userId}</h2>
    }
  }

  return (
    <>
      <h1>Last lists from your friends : </h1>

      <ul>{data.map((userTodos: [{ userId: number, id: number, title: string, completed: boolean }], index: number) => {
        if (index > 0) {
          return (
            <li key={index}>
              {displayUserId(userTodos)}
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
      </ul>
    </>
  );
}

export default Lists;