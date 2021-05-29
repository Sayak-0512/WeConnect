import React, { useEffect, useState } from 'react'
import "./whiteboard.css"
import {io} from "socket.io-client";
import {useParams} from "react-router-dom";
import Peer from 'peerjs';
function WhiteBoard(props) {

  console.log(props,"pros")
  const {id: documentId}=useParams();
  var myPeer = new Peer();
  const [socket,setSocket]=useState();

  useEffect(()=> {
    console.log("Hello from connection");
    const s=io("http://localhost:3001");
    setSocket(s);
    return () => {
      s.disconnect();
    }
  },[])
  // useEffect(() => {
  //   const canvas=document.querySelector("#board");
  //   const ctx=canvas.getContext('2d');
  //   canvas.height=1024;
  //   canvas.width=1024;
  //   let painting=false;

  //   function startPosition(e){
  //     painting=true;
  //     draw(e);
  //   }

  //   function finishedPosition(){
  //     painting=false;
  //     ctx.beginPath();
  //   }
  //   function draw(e){
  //     if(!painting) return;

  //     ctx.lineWidth= 5;
  //     ctx.lineCap="round";
  //     ctx.lineTo(e.clientX,e.clientY);
  //     ctx.stroke();
  //     ctx.beginPath();
  //     ctx.moveTo(e.clientX,e.clientY);
  //   }

  //   canvas.addEventListener("mousedown",startPosition);
  //   canvas.addEventListener("mouseup",finishedPosition);
  //   canvas.addEventListener("mousemove",draw);


    
  // },[])

  useEffect(()=>{

    if(socket==null ) return;
    myPeer.on('open',id=>{
      socket.emit("get-document-whiteboard",documentId);
    })
    

  },[socket,documentId])

  useEffect(()=> {
    if(socket==null) return;
    socket.on("received-canvas-data",(data) => {
      console.log("Hello from received canvas");
      var image=new Image();
      var canvas=document.querySelector("#board");
      var ctx=canvas.getContext("2d");
      image.onload=() => {
        ctx.drawImage(image,0,0);
      }
      image.src=data;
    })
  },[socket])
  useEffect(()=> {
  if(socket==null) return;
  socket.once("load-document-whiteboard",(data) => {
      var image=new Image();
      var canvas=document.querySelector("#board");
      var ctx=canvas.getContext("2d");
      image.onload=() => {
        ctx.drawImage(image,0,0);
      }
      image.src=data;
  })
  },[socket])

  
  const [lineColor,setLineColor]=useState('#000000')
  const [lineSize,setLineSize]=useState(5)
 

  // useEffect(()=>{

  //   if(socket==null) return;

  //   const interval=setInterval(() => {
  //       socket.emit("save-document",quill.getContents())
  //   },2000)

  //   return () => {
  //     clearInterval(interval);
  //   }
  // },[socket])
  useEffect(() => {
    var canvas = document.querySelector('#board');
    const interval=setInterval(() => {
      var base64ImageData=canvas.toDataURL("image/png");
      socket.emit("save-document-whiteboard",base64ImageData)
  },100)
    return () => {
      clearInterval(interval)
    }
  }, [socket])

  useEffect(() => {
    if(socket==null) return;

    var canvas = document.querySelector('#board');
    var ctx = canvas.getContext('2d');
    //ADDED
    // ctx.strokeStyle=color;
    // ctx.lineWidth=size;
    //ADDED
    var sketch = document.querySelector('#sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    // canvas.height = parseInt(sketch_style.getPropertyValue('height'));
    canvas.height = 650;

    var mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};

    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);


    /* Drawing on Paint App */
    
    
    canvas.addEventListener('mousedown', function(e) {
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
   var timer,interval;
    var onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
       timer= setTimeout(() => {
         var base64ImageData=canvas.toDataURL("image/png");
         socket.emit("canvas-data",base64ImageData)
       }, 1000 );
    
    };
    // window.addEventListener("resize",() => {
    //   canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    //   canvas.height = parseInt(sketch_style.getPropertyValue('height'));
    // })
    return () => {clearTimeout(timer);
    // clearInterval(interval);
    };

  
  },[socket])

  
  useEffect(() => {
    var canvas = document.querySelector('#board');
  
    var ctx= canvas.getContext('2d');
    //console.log(size,color,"sc");
    setLineColor(props.color);
    setLineSize(props.size);
    console.log(props.size,props.color,"sadasdasd");
     ctx.lineWidth = lineSize;
    //ctx.lineWidth = props.size;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    //ctx.strokeStyle = props.color;
     ctx.strokeStyle = lineColor;
  }, [props.size,props.color,lineSize,lineColor])


  return (
    <div id="sketch" className="sketch" >
      <canvas className="board" id="board"></canvas>
   </div>
  )
}

export default WhiteBoard
