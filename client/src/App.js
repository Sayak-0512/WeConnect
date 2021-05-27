import TextEditor from "./components/TextEditor";
import VideoBox from "./components/VideoBox";
import {Grid} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {v4 as uuidV4} from "uuid";
import Container from "./components/Container";

function App() {
  return (
    <Router >
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/meeting/${uuidV4()}`} />
      </Route>
      <Route path="/meeting/:id" >
      <Grid container> 
      <Grid container item xs={6} direction="Column"> 
        <Grid item xs={12}>
          <TextEditor /> 
        </Grid>
        <Grid item xs={12}>
          <Container />
        </Grid>
      </Grid> 
        <Grid item xs={6}>
            <VideoBox />
        </Grid>
      </Grid>
      </Route>
    </Switch> 
    </Router>
  );
}

export default App;
