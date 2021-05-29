import React from 'react'
//icons
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import {Button, Grid} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TextEditor from "../components/TextEditor";
import VideoBox from "../components/VideoBox";
import Container from "../components/Container";
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const AllApps = () => {
    const [whiteboardOpen, setwhiteboardOpen] = useState(false)
  const [docsOpen, setdocsOpen] = useState(false)
  const [isVideoMute, setisVideoMute] = useState(false)
  const [isAudioMute, setisAudioMute] = useState(false)
  const [open, setOpen] = React.useState(false);
  const {id: meetingId}=useParams();
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

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


  useEffect(() => {
    const timer=setTimeout(() => {
      setOpen(true);
    },2000)
    return () => {
      clearTimeout(timer);
    }
  }, [])
    return (
        <div>
            {docsOpen?
          (
              
            //Doc
            <div className="videoStylefromReact">
              <Grid item container xs={12} direction="row">
                  <Grid item xs={3} >
                    <VideoBox />
                  </Grid>
                  
                  <Grid item container xs={9} direction="column" >
                    
                    <Grid item xs={12}>
                      <TextEditor /> 
                    </Grid>
                  </Grid>
                  {/* 
                  #3498db 
                  #ddba00
                  #ADEFD1FF
                  */}
              </Grid>
              <div className="bottomToolbar">
                <Grid container direction="row" spacing={5} justify="center" alignItems="center" style={{paddingTop:"1.3%"}}>
                  <Grid item >
                    <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={toggleWhiteBoard}>Toggle Whiteboard</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={toggleDocsBoard}>Toggle Doc</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={()=>setisAudioMute(!isAudioMute)}>
                      {
                        !isAudioMute?
                        (<MicIcon/>)
                        :
                        (<MicOffIcon/>)
              
                      }
                      </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={()=>setisVideoMute(!isVideoMute)}>
                      {
                        !isVideoMute?
                        (<VideocamIcon/>)
                        :
                        (<VideocamOffIcon/>)
                      }
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" style={{color:"white",backgroundColor:"#e74c3c"}} onClick={leaveCall}><CallEndIcon/></Button>
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
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9",fontFamily:"Poppins"}} onClick={toggleWhiteBoard}>Toggle Whiteboard</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9",fontFamily:"Poppins"}} onClick={toggleDocsBoard}>Toggle Doc</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={()=>setisAudioMute(!isAudioMute)}>
                        {
                          !isAudioMute?
                          (<MicIcon/>)
                          :
                          (<MicOffIcon/>)
              
                        }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={()=>setisVideoMute(!isVideoMute)}> 
                          {
                            !isVideoMute?
                            (<VideocamIcon />)
                            :
                            (<VideocamOffIcon />)
                          }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#e74c3c"}} onClick={leaveCall}><CallEndIcon/></Button>
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
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={toggleWhiteBoard}>Toggle Whiteboard</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={toggleDocsBoard}>Toggle Doc</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={()=>setisAudioMute(!isAudioMute)}>
                        {
                          !isAudioMute?
                          (<MicIcon/>)
                          :
                          (<MicOffIcon/>)
                
                        }
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#2980b9"}} onClick={()=>setisVideoMute(!isVideoMute)}>
                          {
                            !isVideoMute?
                            (<VideocamIcon/>)
                            :
                            (<VideocamOffIcon/>)
                          }
                          
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{color:"white",backgroundColor:"#e74c3c"}} onClick={leaveCall}><CallEndIcon/></Button>
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
        
{/*         
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Open alert dialog
            </Button>  */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" style={{textAlign: "center"}}> Your meeting is ready</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Share this code with others that you want in the meeting.
                </DialogContentText>
                <DialogContentText id="alert-dialog-description">
                   Click here to copy to clipboard.
                </DialogContentText>
                <CopyToClipboard text={meetingId}>
                  <Button variant="contained" onClick={handleClose}>{meetingId} <FileCopyIcon style={{margin: "2px"}}/></Button>
                </CopyToClipboard>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" style={{margin: "auto"}} onClick={handleClose} color="primary">
                  CLOSE
                </Button>
                
              </DialogActions>
            </Dialog>
    </div>
    )
}

export default AllApps
