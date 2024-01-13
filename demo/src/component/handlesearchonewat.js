import React from "react" 
import flights from "./flight"
function Handlesearchoneway(){

    var origin_city=document.getElementById('origin_city').value
    var destination_city=document.getElementById('destination_city').value
    var Dep_date=document.getElementById('Dep_date').value
    var pass_count=document.getElementById('pass_count').value
    const flightShowDiv = document.getElementById('flightshowdiv');

    flights.forEach(flight => {
    if (
        flight.date === Dep_date &&
        flight.originCity === origin_city &&
        flight.departureCity === destination_city
    ) {
        
        const flightDetails = `
        <div>
            <h1> ${flight.originCity}>${flight.departureCity}</h1>
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
    }
    else{
        const flightDetails = `
        <div>
            <h1>Flight not available</h1>
        </div>
        
        `;
        flightShowDiv.innerHTML = flightDetails;

    }
    });


        
}

   
export default Handlesearchoneway;