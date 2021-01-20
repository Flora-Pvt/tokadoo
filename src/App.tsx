import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./parts/Navbar"

import Lists from "./pages/Lists"
import Users from "./pages/Users"

import listsService from "./services/listsService"
import usersService from "./services/usersService"

function App() {
  const [listsData, setListsData]: any[] = useState([]);
  const [listsLoading, setListsLoading] = useState(false);
  const [listsError, setListsError] = useState(false);

  const [usersData, setUsersData] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState(false);

  useEffect(() => {

    usersService.getUsers()
      .then(users => {
        setUsersLoading(true)
        setUsersError(false)
        setUsersData(users)
        setUsersLoading(false)
      })
      .catch(() => setUsersError(true))
  }, [])

  useEffect(() => {
    listsService.getLists().then(lists => {
      setListsLoading(true)
      // group todos with same userId in array
      let listsArray = []
      for (let i = 1; i < lists[lists.length-1].userId+1; i++) {
        let userList = lists.filter((list: { userId: number }) => list.userId === i)
        console.log(userList, i)
        listsArray.push(userList)
      }
      setListsData(listsArray)
      setListsError(false)
      setListsLoading(false)
    })
      .catch(() => setListsError(true))
  }, [])

  return (
    <Router>
      <Navbar />
      <div>

        <Switch>
          <Route exact path="/">
            <Lists listsData={listsData} usersData={usersData} listsLoading={listsLoading} listsError={listsError} />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/users">
            <Users usersData={usersData} usersLoading={usersLoading} usersError={usersError} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
