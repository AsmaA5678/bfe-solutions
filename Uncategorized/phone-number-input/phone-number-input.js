
import React, {useState} from 'react'
export function PhoneNumberInput() {
  const [number,setNumber]=useState("");
  const format=(number)=>{
    number=number.replace(/\D/g,"");
    number=number.slice(0,10);
    if(number.length>3 && number.length<=6){
      number="("+number.slice(0,3)+")"+number.slice(3);
    }else if(number.length>6){
      number="("+number.slice(0,3)+")"+number.slice(3,6)+"-"+number.slice(6);
    }
    return number;
  }
  const handleChange=(event)=>{
    const value=event.target.value;
    setNumber(format(value));
  }
  return <input data-testid="phone-number-input" 
                value={number}
                onChange={handleChange}
          />
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }








