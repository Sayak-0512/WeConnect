import React,{useEffect,useState} from 'react'
import {io} from "socket.io-client"
import {useParams} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import Peer from 'peerjs';

const Videobox = () => {

    
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
     
        <div id="video-grid">
            {/* <Video srcObject={srcObject}/> */}
        </div>
      
    )
}

export default Videobox
