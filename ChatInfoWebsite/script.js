  function openChat(){
    if(document.getElementById("chat").style.visibility == "visible"){
      document.getElementById("chat").style.visibility = "hidden";
    }else{
      document.getElementById("chat").style.visibility = "visible";
    }
  }

  function send(){
    var message = document.getElementById("messages");
    var messageSend = document.getElementById("msgInput").value;
    if(messageSend!=""){
      message.innerHTML += "<p class=msgLeft>"+messageSend+"</p>";
      message.innerHTML += "<p class=msgRight>Thank you<br>Message send</p>";
    }
    var chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight; 
  }