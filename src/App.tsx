import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar"
import lists from "./pages/lists"
import users from "./pages/users"

function App() {
  return (

    <Router>

      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={lists} />
        </Switch>
        <Switch>
          <Route exact path="/users" component={users} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
