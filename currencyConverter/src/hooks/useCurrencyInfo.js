// useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => setCurrencyInfo(data.rates))
      .catch(error => console.error('Error fetching currency data:', error));
  }, []);

  return currencyInfo;
}

export default useCurrencyInfo;
