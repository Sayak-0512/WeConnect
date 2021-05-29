import React from 'react'
//icons
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import {Button, Grid} from "@material-ui/core";

import TextEditor from "../components/TextEditor";
import VideoBox from "../components/VideoBox";
import Container from "../components/Container";
import {useState} from 'react';


const AllApps = () => {
    const [whiteboardOpen, setwhiteboardOpen] = useState(false)
  const [docsOpen, setdocsOpen] = useState(false)
  const [isVideoMute, setisVideoMute] = useState(false)
  const [isAudioMute, setisAudioMute] = useState(false)
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
        <div>
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
                    <Button variant="contained" color="primary" onClick={()=>setisAudioMute(!isAudioMute)}>
                      {
                        !isAudioMute?
                        (<MicIcon/>)
                        :
                        (<MicOffIcon/>)
              
                      }
                      </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={()=>setisVideoMute(!isVideoMute)}>
                      {
                        !isVideoMute?
                        (<VideocamIcon/>)
                        :
                        (<VideocamOffIcon/>)
                      }
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={leaveCall}><CallEndIcon/></Button>
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
                        <Button variant="contained" color="primary" onClick={()=>setisAudioMute(!isAudioMute)}>
                        {
                          !isAudioMute?
                          (<MicIcon/>)
                          :
                          (<MicOffIcon/>)
              
                        }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>setisVideoMute(!isVideoMute)}> 
                          {
                            !isVideoMute?
                            (<VideocamIcon/>)
                            :
                            (<VideocamOffIcon/>)
                          }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={leaveCall}><CallEndIcon/></Button>
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
                        <Button variant="contained" color="primary" onClick={()=>setisAudioMute(!isAudioMute)}>
                        {
                          !isAudioMute?
                          (<MicIcon/>)
                          :
                          (<MicOffIcon/>)
                
                        }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>setisVideoMute(!isVideoMute)}>
                          {
                            !isVideoMute?
                            (<VideocamIcon/>)
                            :
                            (<VideocamOffIcon/>)
                          }
                          
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={leaveCall}><CallEndIcon/></Button>
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
        
          
        
        </div>
    )
}

export default AllApps
