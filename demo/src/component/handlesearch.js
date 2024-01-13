import React from "react" 
import { ToastContainer, toast } from 'react-toastify';
import flights from "./flight"
function Handlesearch(){

    var origin_city=document.getElementById('origin_city').value
    var destination_city=document.getElementById('destination_city').value
    var Dep_date=document.getElementById('Dep_date').value
    var return_date=document.getElementById('return_date').value
    var pass_count=document.getElementById('pass_count').value

    const flightShowDiv = document.getElementById('flightshowdiv');
    const notify = () => toast("Flight Results!");

    flights.forEach(flight => {
    if (
        flight.date === Dep_date &&
        flight.originCity === origin_city &&
        flight.departureCity === destination_city &&
        flight.returnDate===return_date
    ) {
        
        const flightDetails = `
        <div>
            <h3> ${flight.originCity}>${flight.departureCity}>${flight.originCity}</h3>
        </div>
        <span class="flight-number">Flight ${flight.id}</span><br>
        Origin: ${flight.originCity}<br>
        Destination: ${flight.departureCity}<br>
        Date: ${flight.date}<br>
        Return Date: ${flight.returnDate}<br>
        Departure Time: ${flight.arriveTime}
        <div class="flight-image" id='flight-image'>
            <img src="./OIPP.jpg" alt="Flight Image">
            <button>Book Ticket</button>
        </div>
        `;
        

        flightShowDiv.innerHTML = flightDetails;
        notify();
        <ToastContainer/>
    }else{
        const flightDetails = `
        <div>
            <h1>Flight not available</h1>
        </div>
        
        `;
        flightShowDiv.innerHTML = flightDetails;

    }
    });


        
}

   
export default Handlesearch;