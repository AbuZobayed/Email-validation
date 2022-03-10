const validEmail = () => {

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    let errorText = document.getElementById('error')
  
    const emailField = document.getElementById('input-value');
    // const emailvalue = emailField.value;
  
    if(emailField.value.match(regex)){
      errorText.innerText = 'Your Email Is Valid'
      errorText.style.color = 'green'
      errorText.style.fontStyle = 'italic'
    }
    else{
      errorText.innerText = "Your Email Is Invalid"
      errorText.style.color = 'red'
      errorText.style.fontStyle = 'italic'
    }
  }