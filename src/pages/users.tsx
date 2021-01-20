import { Link } from "react-router-dom";

function Users({ currentUserId, usersData, isLoading, isError }: any) {

  return (
    <>
      <h1>All your friends : </h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul>{usersData.map((user: any) => {
            if (currentUserId === user.id) {
              return null
            } else {
              return <li key={user.id}>
                <Link to={{pathname: `/user/${user.id}`}} aria-label="link to your friend page"><h2>{user.username}</h2></Link>
                <p>{user.name}</p>
                <p>{user.address.city}</p>
              </li>
            }
          })}
          </ul>)}
    </>
  );
}

export default Users;