
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {v4 as uuidV4} from "uuid";



import AllApps from "./components/AllApps";

function App() {
  
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/meeting/${uuidV4()}`} />
        </Route>
        <Route path="/meeting/:id" >
          <AllApps/>
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
