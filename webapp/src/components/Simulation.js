import { useState} from 'react';
import { Outlet } from 'react-router-dom';
import "./style/simulation.css";

const Simulation = () => {
  const [investment, setInvestment] = useState(0);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let value = parseFloat(event.target.value);
      if (!isNaN(value) && event.target.checkValidity()) {
        setInvestment(value);
      } 
    }
  }

  return (
    <div className="simulation">
      <h1>Simulation</h1>

      <div className="description">
        <p>
          This page allows you to run our stock trading simulator. All you need to do is enter an investment amount and hit enter.
          Our system will use your investment amount to determine the best stocks to buy.
          It will then constantly monitor the market and trade stocks when there is an anticipated profit.
          This process will keep going until you end the simulation.
        </p>
        <br />
        <p>
          Expected input is a whole number or a decimal number with one or two digits after the decimal point.
        </p>
        <br />
      </div>

      <p>Your current investment value is: ${investment}</p>

      <div className="investment-input">
        <label>Enter investment value: </label>
        <input inputMode="decimal" pattern="^\d+(\.\d{1,2})?$" placeholder="0.00" onKeyDown={onKeyDown}/>
      </div>

      <Outlet />
    </div>
  );
}

export default Simulation;
