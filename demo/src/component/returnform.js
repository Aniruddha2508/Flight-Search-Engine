import { Button } from "reactstrap";
import Handlesearch from "./handlesearch";
import ReactSlider from "react-slider";
import Slider from 'react-slider';
import { useState } from "react";
import MySliderComponent from "./slider";


function Returnform(){
    
    return(
        <div>
            <div>
            <input type="text" id="origin_city" placeholder="Enter Origin City" required></input>
            <input type="text" id="destination_city" placeholder="Enter Destination city" required></input>
            <label>Date of travel</label><br></br>
            <input type="date" id="Dep_date" required></input><br></br>
            <label>Return Date</label><br></br>
            <input type="date" id="return_date" required></input><br></br>
            <label>Number of passengers</label> 
            
            <input type="number" id="pass_count" required></input><br></br>
            <Button onClick={Handlesearch}>Search</Button>
            </div>


            


        </div>
    )
}
export default Returnform;