import React,{useEffect,useState} from 'react'
import {io} from "socket.io-client"
import {useParams} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import Peer from 'peerjs';

const Videobox = ({isVideoMute,isAudioMute}) => {

    
    var myPeer = new Peer();
    const peers = {}
    const [socket, setSocket] = useState()
    const {id:videoId} = useParams();
    const videoGrid = document.getElementById('video-grid')

    useEffect(()=> {
        const s=io("http://localhost:3001");
        setSocket(s);
        return () => {
          s.disconnect();
        }
      },[])

    // let myVideoStream;
    const [myVideoStream, setmyVideoStream] = useState()
    const muteUnmute = () => {
      const enabled = myVideoStream.getAudioTracks()[0].enabled;
      if (enabled) {
        myVideoStream.getAudioTracks()[0].enabled = false;
        //setUnmuteButton();
      } else {
        //setMuteButton();
        myVideoStream.getAudioTracks()[0].enabled = true;
      }
    }
    
    const playStop = () => {
      //console.log('object')
      let enabled = myVideoStream.getVideoTracks()[0].enabled;
      if (enabled) {
        myVideoStream.getVideoTracks()[0].enabled = false;
        //setPlayVideo()
      } else {
        //setStopVideo()
        myVideoStream.getVideoTracks()[0].enabled = true;
      }
    }
    useEffect(() => {
      if(myVideoStream)
        playStop()
    }, [isVideoMute])
    useEffect(() => {
      if(myVideoStream)
        muteUnmute()
    }, [isAudioMute])

    useEffect(() => {
        
      if(socket== null)
          return;
      myPeer.on('open',id=>{
        socket.emit('join-room',videoId,id);
      })
      const myVideo = document.createElement('video')
      myVideo.muted = true
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then(stream => {
        // myVideoStream = stream;
        setmyVideoStream(stream);
        console.log(myVideoStream,"myvideostream");
        addVideoStream(myVideo, stream)
        myPeer.on('call', call => {
          call.answer(stream)
          const video = document.createElement('video')
          call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
          })
        })
      
        socket.on('user-connected',userId =>{
          connectToNewUser(userId, stream)
        })

        socket.on('user-disconnected', userId => {
          if (peers[userId]) peers[userId].close()
        })
      })
      
    }, [socket,videoId])
    

    function addVideoStream(video, stream) {
      video.srcObject = stream
      video.addEventListener('loadedmetadata', () => {
        video.play()
      })
      videoGrid.append(video)
    }

    function connectToNewUser(userId, stream) {
      const call = myPeer.call(userId, stream)
      const video = document.createElement('video')
      
      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
      })
      call.on('close', () => {
        video.remove()
      })
    
      peers[userId] = call
    }

    return (

        <div id="video-grid" className="videoStyleFromDiv">
            {/* <Video srcObject={srcObject}/> */}
        </div>
      
    )
}

export default Videobox
