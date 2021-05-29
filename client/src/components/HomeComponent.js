import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { Button, Grid, Avatar } from "@material-ui/core";
import {v4 as uuidV4} from "uuid";
import "./Homecomponent.css";
import { useHistory } from "react-router";

function HomeComponent() {
   const history=useHistory();
   const [input,setInput]=useState();
    function handleCreate(){
        history.push(`/meeting/${uuidV4()}`)
    }
    function handleJoin(){
        if(input)
        history.push(`/meeting/${input}`)
    }
    //https://reputationtoday.in/wp-content/uploads/2020/07/iStock-1215704164-700x395-1.jpg
  return (
    <div className="background">
      <Grid container direction="row">
        <Grid item container xs={8} justify="center" alignItems="center" >
          <Grid item style={{marginTop:"200px"}}>
            <h1 className="heading">Welcome to WeMeet</h1>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={1} direction="column">
            <Grid item >
                  <Button variant="contained" onClick={handleCreate} style={{padding:"10px 65px"}}>CREATE A ROOM</Button>
              </Grid>
              <Grid container item direction="row" spacing={2} justify="center" alignItems="center">
                <Grid item>
                    <textarea rows="2.5"  value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Enter the link"></textarea>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleJoin} >JOIN</Button>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={4} direction="column" justify="center"  spacing={3}>
          <Grid item style={{fontSize:"220%",marginTop:"50px"}}>
          Live meeting with real 
          time text editing and whiteboard.
          </Grid>
          <Grid item>
          Interviews
          </Grid>
          <Grid item>
          Meetings
          </Grid>
          <Grid item>
          Friends hang out
          </Grid>
          <Grid item>
          Brainstorming ideas 
          </Grid>
          <Grid item>
          Online Teaching
          </Grid>
          <Grid item>
          Brainstorming ideas 
          </Grid>
        </Grid>
    
      </Grid>
      
      
      
    </div>
  );
}

export default HomeComponent;