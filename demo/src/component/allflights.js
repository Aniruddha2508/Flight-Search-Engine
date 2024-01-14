import React from "react";
import flights from "./flight";
import { useState } from "react";
function Allflights(){
    const [searchCriteria, setSearchCriteria] = useState('');
    const filteredFlights = flights.filter((flight) =>
    flight.originCity.toLowerCase().includes(searchCriteria.toLowerCase()) ||
    flight.departureCity.toLowerCase().includes(searchCriteria.toLowerCase())
  );
  
    return(
        <div>
            <h2>All Flight Details</h2>
          <div className="flight-cards-container">
            {filteredFlights.map((flight) => (
              <div className="flight-card" id='flight-card' key={flight.id}>
                <div className="flight-info">
                  <strong>Flight {flight.id}</strong><br />
                  Origin: {flight.originCity}<br />
                  Destination: {flight.departureCity}<br />
                  Date: {flight.date}<br />
                  Return Date: {flight.returnDate}<br />
                  Departure Time: {flight.arriveTime}<br/>
                  Price : {flight.price}<br/>
                  Return price : {flight.Returnprice}<hr></hr>
                </div>
                <div className="flight-image" id='flight-image'>
                  
                  <img src= 'OIPP.jpg' /><br></br>
                  <button >Book Ticket</button>
                </div>
                
              </div>
  ))}
</div>
       
        </div>
    )

}
export default Allflights;