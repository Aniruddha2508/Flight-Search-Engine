import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import OnewayForm from './component/onewayform';
import ReturnForm from './component/returnform';
import flights from './component/flight';
import Handlesearch from './component/handlesearch';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('oneway');
  const [searchCriteria, setSearchCriteria] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchCriteria('');
    
  

    console.log('Change is happening:', event.target.value);

  };
 

  const filteredFlights = flights.filter((flight) =>
    flight.originCity.toLowerCase().includes(searchCriteria.toLowerCase()) ||
    flight.departureCity.toLowerCase().includes(searchCriteria.toLowerCase())
  );

  return (
    <div className="container" id='container'>
      <h1 id='headline'>Flight Search Engine</h1>
      <div className="row">
        <div className="col-4">
          <div id='radiobuttons'>
            <FormGroup check>
              <Label check>
                <Input
                  id='oneway'
                  type="radio"
                  name="radioOption"
                  value="oneway"
                  checked={selectedOption === 'oneway'}
                  onChange={handleRadioChange}
                />
                {' '}
                One-Way
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  id='return'
                  type="radio"
                  name="radioOption"
                  value="return"
                  checked={selectedOption === 'return'}
                  onChange={handleRadioChange}
                />
                {' '}
                Return
              </Label>
            </FormGroup>
          </div>
          <div className="col-8">
            {selectedOption === 'oneway' ? <OnewayForm /> : <ReturnForm />}
          </div>
        </div>
        <div className="col-8" id='flightshowdiv' >
       
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
                  Departure Time: {flight.arriveTime}
                </div>
                <div className="flight-image" id='flight-image'>
                  
                  <img src= 'OIPP.jpg' /><br></br>
                  <button >Book Ticket</button>
                </div>
                
              </div>
  ))}
</div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
