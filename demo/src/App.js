import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import OnewayForm from './component/onewayform';
import ReturnForm from './component/returnform';
import flights from './component/flight';
import Handlesearch from './component/handlesearch';
import './App.css';
import Allflights from './component/allflights';
import MySliderComponent from './component/slider';

function App() {
  const [selectedOption, setSelectedOption] = useState('oneway');
  const [searchCriteria, setSearchCriteria] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchCriteria('');
    const allFlightDetails = <Allflights />;
    ReactDOM.render(allFlightDetails, document.getElementById('flightshowdiv'));
    
  

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
          <div id='slider'>
            <MySliderComponent/>
          </div>
        </div>
        <div className="col-8" id='flightshowdiv' >
       
             <Allflights/>
        </div>
      </div>
    </div>
  );
}

export default App;
