import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { Button, Grid } from "@material-ui/core";
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
  return (
    <div className="background">
      <h1 className="heading">Welcome to WeMeet</h1>
      
      <Grid container justify="center" spacing={2} alignItems="center">
      <Grid item>
             <Button variant="contained" onClick={handleCreate} >CREATE A ROOM</Button>
        </Grid>
        <Grid item>
            <textarea rows="2.5"  value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Enter the link"></textarea>
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={handleJoin} >JOIN</Button>
        </Grid>
       
    </Grid>
    </div>
  );
}

export default HomeComponent;