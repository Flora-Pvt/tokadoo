import { useState, useEffect } from 'react';
import usersService from "../services/usersService"

function Users() {
  const [data, setData] = useState([{ id: 0, name: '', username: '', city: '' }]);

  useEffect(() => {
    usersService.getUsers().then(users => setData(users))
  }, [])

  return (
    <>
      <h1>All your friends : </h1>

      <ul>{data.map(user => {
          return <li key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.name}</p>
            <p>{user.city}</p>
            </li>        
      })}
      </ul>
    </>
  );
}

export default Users;