const clearBtn = document.querySelector('.clearBtn');
const sendBtn = document.querySelector('.sendBtn');

clearBtn.addEventListener('click', ()=>{
    document.querySelector('.iName').value = "";
    document.querySelector('.iMail').value = "";
    document.querySelector('.iPhone').value = "";
    document.querySelector('.iMessage').value = "";
})

sendBtn.addEventListener('click', ()=>{
    if(document.querySelector('.iName').value == ""  || document.querySelector('.iMail').value == "" ||document.querySelector('.iPhone').value == "" ||document.querySelector('.iMessage').value == ""){
        alert('Pls fill in the fields')
    } else{
        alert("Message Sent!");
        document.querySelector('.iName').value = "";
    document.querySelector('.iMail').value = "";
    document.querySelector('.iPhone').value = "";
    document.querySelector('.iMessage').value = "";
    }
})