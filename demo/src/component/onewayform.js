import { Button } from "reactstrap";
import { useState } from "react";
import Slider from 'react-slider';
import MySliderComponent from "./slider";

import Handlesearchoneway from "./handlesearchonewat";




function Onewat(){
 
    
    return(
        <div>
            <div>
            <input type="text" id="origin_city" placeholder="Enter Origin City" required></input>
            <input type="text" id="destination_city" placeholder="Enter Destination city" required></input>
            <label>Date of travel : </label><br></br>
            <input type="date" id="Dep_date" required></input><br></br>
            <label>Number of passengers</label>
            <input type="number" id="pass_count" required></input><br></br>
            
            <Button onClick={Handlesearchoneway} >Search</Button>
            </div>

            <div>
                <MySliderComponent/>
            </div>
            
    

        
        </div>
    )
}
export default Onewat;