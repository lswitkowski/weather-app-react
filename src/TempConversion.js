import React, {useState} from "react";


export default function TempConversion(props){
    const[unit, setUnit]= useState("celsius");
   
   function showFahrenheit(event)
   {event.preventDefault();
    setUnit("fahrenheit");
 }
   
     function showCelsius(event) {
       event.preventDefault();
       setUnit("celsius");
     }
   
   
    if (unit==="celsius"){
  return (
    <div className="tempUnit">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">℃ </span>
      <span className="unit">
        <a href="/" onClick={showFahrenheit}>
          ℉
        </a>
      </span>
    </div>
  );
}else{
    let fTemp=((props.celsius)*9/5)+32;
    return (
    <div className="tempUnit">
      <span className="temperature">{Math.round(fTemp)}</span>
      <span className="unit">℉ </span>
      <span className="unit"><a href="/" onClick={showCelsius}>℃</a></span>
    </div>)
}



}