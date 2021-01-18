import { useState, useEffect } from 'react';
import usersService from "../services/usersService"

function Users() {
  const [data, setData] = useState([{ name: '', id: 0 }]);

  useEffect(() => {
    usersService.getUsers().then(users => setData(users))
  }, [])

  return (
    <>
      <p>Les dernières listes de tous vos amis.</p>
      <p></p>
      <ul>{data.map(user => {
          return <li key={user.id}>{user.name}</li>
        
      })}
      </ul>
    </>
  );
}

export default Users;