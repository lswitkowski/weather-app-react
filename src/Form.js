import React from "react";
import "./Weather.css";

export default function Form(){
    return(
        <form className="m-1">
          <input
            className="form-input"
            type="search"
            placeholder="Enter a city"
          />
          <input className="form-button" type="submit" value="Search" />
        </form>);}
