let socket= io.connect("http://localhost:4000")


let handle = document.getElementById("handle")
let message = document.getElementById("message")
let btn = document.getElementById("send")
let output = document.getElementById("output")
let feedback= document.getElementById("feedback")


message.addEventListener("keypress",()=>{
  socket.emit("typing",handle.value)
})

btn.addEventListener("click",()=>{
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
})


socket.on("chat",(data)=>{
  feedback.innerHTML=""
  output.innerHTML+="<p><strong>"+data.handle+": </strong>"+data.message+"</p>"
})

socket.on("typing",(data)=>{
  feedback.innerHTML = "<p><em>"+data.handle+" is typing"+"</em></p>"
})




