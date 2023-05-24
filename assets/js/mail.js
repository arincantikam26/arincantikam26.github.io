function sendMail() {
    var name_val = document.getElementById("name");
    var email_val = document.getElementById("email");
    var msg_val = document.getElementById("message");
    
    if (name_val.value == "" | email_val.value == "" | msg_val.value == "") {
        alert('Please fill the form.')
    } else {
        var params = {
            to_name: "arincantikam@gmail.com",
            name: name_val.value,
            email: email_val.value,
            message: msg_val.value,
        };
      
        const serviceID = "service_y1ln6wg";
        const templateID = "template_au1114g";
      
        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            name_val.value = "";
            email_val.value = "";
            msg_val.value = "";
            console.log(res);
            alert("Your message sent successfully!!")
    
        })
          .catch(
            err=>
                console.log(err)
            );
    }
  
  }
  
  