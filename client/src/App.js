
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {v4 as uuidV4} from "uuid";



import AllApps from "./components/AllApps";
import HomeComponent from "./components/HomeComponent";

function App() {
  
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <HomeComponent /> 
        </Route>
        <Route path="/meeting/:id" >
          <AllApps/>
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
