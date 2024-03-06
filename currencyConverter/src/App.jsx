// App.jsx
import React, { useState } from 'react';
import { InputBox } from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo();
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="container">
      <div className="background">
        <div className="form-container">
          <h1 className="title"> <span className="colorful"> Currency Converter</span></h1>

          
          <form onSubmit={(e) => {
              e.preventDefault();
              convert();
          }}>
            <div className="input-container">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="input-container">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="convert-button">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
