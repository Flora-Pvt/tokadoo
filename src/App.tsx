import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./parts/Navbar"

import Lists from "./pages/lists"
import Users from "./pages/users"

import listsService from "./services/listsService"
import usersService from "./services/usersService"

function App() {
  const [listsData, setListsData]: any[] = useState([]);
  const [usersData, setUsersData] = useState([{ id: 0, name: '', username: '', city: '' }]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    
    usersService.getUsers()
      .then(users => {
        setIsLoading(true)
        setIsError(false)
        setUsersData(users)
        setIsLoading(false)
      })
      .catch(() => setIsError(true))
  }, [])


  useEffect(() => {
    listsService.getLists().then(lists => {

      // group todos with same userId in array
      let listsArray = []
      for (let i = 0; i < lists[lists.length - 1].userId; i++) {
        let userList = lists.filter((list: { userId: number }) => list.userId === i)
        listsArray.push(userList)
      }

      setListsData(listsArray)
    })
  }, [])



  return (

    <Router>

      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Lists listsData={listsData} />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/users">
            <Users usersData={usersData} isLoading={isLoading} isError={isError}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
