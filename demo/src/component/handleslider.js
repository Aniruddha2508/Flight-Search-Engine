import flights from "./flight";
import React from "react";

function handleSliderChange(value) {
  const pricefilter = flights.filter((flight) => {
    return parseInt(flight.price) >= value[0] && parseInt(flight.price) <= value[1];
  });

  const flightShowDiv = document.getElementById('flightshowdiv');

  // Clear existing content
  flightShowDiv.innerHTML = '';

  // Append a new div for each flight
  pricefilter.forEach((flight) => {
    const flightDiv = document.createElement('div');
    flightDiv.innerHTML = `
      <span class="flight-number">Flight ${flight.id}</span><br>
      Origin: ${flight.originCity}<br>
      Destination: ${flight.departureCity}<br>
      Date: ${flight.date}<br>
      Return Date: ${flight.returnDate}<br>
      Departure Time: ${flight.arriveTime}<br>
      Price: ${flight.Returnprice}<br>
      <div class="flight-image" id='flight-image'>
        <img src="./OIPP.jpg" alt="Flight Image">
        <button>Book Ticket</button>
      </div>
    `;

    flightShowDiv.appendChild(flightDiv);
  });
}

export default handleSliderChange;
