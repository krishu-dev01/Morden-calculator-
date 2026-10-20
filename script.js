
const display1=document.getElementById("display1")
const display2=document.getElementById("display2")

const buttons = document.querySelectorAll(".btn") ;
let background_value="" ;

buttons.forEach(  button=>{
   button.addEventListener('click', () => {  
  const  button_text=button.textContent.trim();

  
  if(button_text==="C") {
    display1.value="" ;
    display2.value='';
    background_value='' ;
    
  }
  else if(button_text==="="){
    try {
      display2.value=eval(background_value)  }
      catch(error){
        display2.value="ERROR";
    }
  }
  else if (button_text==="×") {
    background_value+="*"
    display1.value+=button_text;
  }
  else if (button_text==="÷") {
    background_value+="/"
        display1.value+=button_text ;

  }
  else if (button_text==="⌫"){
    display1.value=display1.value.slice(0,-1) ;
    background_value=background_value.slice(0,-1) ;
    display2.value=''
    
  }
  else{
    display1.value += button_text;
    background_value += button_text ;
  }
  
   } )
  })
