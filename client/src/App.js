import TextEditor from "./components/TextEditor";
import VideoBox from "./components/VideoBox";
import {Button, Grid} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {v4 as uuidV4} from "uuid";
import Container from "./components/Container";
import {useState} from 'react';

function App() {
  const [whiteboardOpen, setwhiteboardOpen] = useState(false)
  const [docsOpen, setdocsOpen] = useState(false)
  const toggleWhiteBoard=()=>{
    setdocsOpen(false);
    setwhiteboardOpen(!whiteboardOpen);
  }
  const toggleDocsBoard=()=>{

    setwhiteboardOpen(false);
    setdocsOpen(!docsOpen);
  }
  const leaveCall = ()=>{
    // alert("")
    if (window.confirm("Are you sure you want to leave the meeting?")) {
        // window.open(window.location.href, _self)
        console.log("yes");
        window.close();
    } 
    // else {
    //   txt = "You pressed Cancel!";
    // }
    
  }
  return (
    <Router >
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/meeting/${uuidV4()}`} />
      </Route>
      <Route path="/meeting/:id" >
      
      {

      }
        {docsOpen?
        (
          //Doc
          <div className="videoStylefromReact">
            <Grid item container xs={12} direction="row">
                <Grid item xs={4} >
                  <VideoBox />
                </Grid>
                
                <Grid item container xs={8} direction="column" >
                  
                  <Grid item xs={12}>
                    <TextEditor /> 
                  </Grid>
                </Grid>
            
            </Grid>
            <div className="bottomToolbar">
              <Grid container direction="row" spacing={5} justify="center" alignItems="center" style={{paddingTop:"1.3%"}}>
                <Grid item >
                  <Button variant="contained" color="primary" onClick={toggleWhiteBoard}>Toggle Whiteboard</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={toggleDocsBoard}>Toggle Doc</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">Mute Audio</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">Mute Video</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={leaveCall}>Leave Call</Button>
                </Grid>
              </Grid>
            
            </div>
          
          </div>
        )
        :
        (
            whiteboardOpen?
            (
              ///White board
              
              <div className="videoStylefromReact">
                <Grid item container xs={12} direction="row">
                    <Grid item xs={3}>
                      <VideoBox />
                    </Grid>
                    <Grid item container xs={9} direction="row">
                      
                      <Grid item xs={12}>
                        <Container />
                      </Grid>
                    </Grid>
                </Grid>
                <div className="bottomToolbar">
                  <Grid container direction="row" spacing={5} justify="center" alignItems="center" style={{paddingTop:"1.3%"}}>
                    <Grid item >
                      <Button variant="contained" color="primary" onClick={toggleWhiteBoard}>Toggle Whiteboard</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={toggleDocsBoard}>Toggle Doc</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary">Mute Audio</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary">Mute Video</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={leaveCall}>Leave Call</Button>
                    </Grid>
                  </Grid>
              
                </div>
          
              </div>

            )
            :
            (

              // only video

              <div className="">
                <Grid item container xs={12} direction="row">
                  <Grid item xs={12}>
                    <VideoBox />
                  </Grid>
                  <Grid item container xs={9} direction="row">
                    
                    {/* <Grid item xs={12}> */}
                      {/* <Container /> */}
                    {/* </Grid> */}
                  </Grid>
              </Grid>
                <div className="bottomToolbar" >
                  <Grid container direction="row" spacing={5} justify="center" alignItems="center" style={{paddingTop:"1.3%"}}>
                    <Grid item >
                      <Button variant="contained" color="primary" onClick={toggleWhiteBoard}>Toggle Whiteboard</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={toggleDocsBoard}>Toggle Doc</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary">Mute Audio</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary">Mute Video</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={leaveCall}>Leave Call</Button>
                    </Grid>
                  </Grid>
                </div>
          
              </div>

            ) 
        )
          
        
        
      
      }
        
        {/* <Grid item xs={12}>
          <Container />
        </Grid> */}
      
        
      </Route>
    </Switch> 
    </Router>
  );
}

export default App;
