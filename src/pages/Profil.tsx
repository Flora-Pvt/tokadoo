import { useState, useEffect } from "react"

function Profil({ currentUserId, usersData, isLoading, isError }: any) {
  const [profil, setProfil] = useState([{ username: "", name: "", email: "", address: { street: "", suite: "", city: "", zipcode: "" }, phone: "" }])

  useEffect(() => {
    setProfil(usersData.filter((user: any) => user.id === currentUserId))
  }, [currentUserId, usersData])

  return (
    <>
      <h1>All your friends : </h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : profil ? (
        <ul>
          <h2>{profil[0].username}</h2>
          <li>name : {profil[0].name}</li>
          <li>phone : {profil[0].phone}</li>
          <li>email : {profil[0].email}</li>
          <li>address : </li>
          <ul>
              <li>{profil[0].address.street}</li>
              <li>{profil[0].address.suite}</li>
              <li>{profil[0].address.city}</li>
              <li>{profil[0].address.zipcode}</li>
            </ul>
          
        </ul>
      ) : (
            <div>Something went wrong ...</div>
          )
      }
    </>
  );
}

export default Profil;