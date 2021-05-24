const mongoose=require("mongoose");
const Document=require("./Document");
const defaultvalue="";
const io=require("socket.io")(3001,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"]
    }
})
mongoose.connect('mongodb://localhost/google-docs-clone', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});


io.on("connection",socket => {


    ///////////video/////////
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId,userId,"hello")
        socket.join(roomId)
        socket.to(roomId).emit('user-connected', userId)
  
      socket.on('disconnect', () => {
        socket.to(roomId).emit('user-disconnected', userId)
      })
    })


    //////DOC//////////////
    socket.on("get-document",async documentId => {
        const document=await findOrCreateDocument(documentId);
        socket.join(documentId);
   socket.emit("load-document",document.data);
    socket.on("send-changes",delta => {
       socket.broadcast.to(documentId).emit("receive-changes",delta)
    })

    socket.on("save-document",async data=> {
        await Document.findByIdAndUpdate(documentId,{data})
    })
})
});


async function findOrCreateDocument(id) 
{
    if(id==null) return
    
    const document= await Document.findById(id);
    if(document) return document
    return await Document.create({_id: id, data: defaultvalue})
}