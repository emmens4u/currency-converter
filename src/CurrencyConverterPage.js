import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./currencyRow";
import CurrencyLogin from "./Component/CurrencyLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const BASE_URL =
 "https://v6.exchangerate-api.com/v6/8f3274796eb31900bc066351/latest/mklmo";
const base_code = "USD";
const fixedcurrency = "GHS";

function CurrrencyConverterPage() {
    const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(base_code);
  const [toCurrency, setToCurrency] = useState(fixedcurrency);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [conversion_rates, setConversion_rates] = useState(null);
  const [amountInFromCurrency, setamountInFromCurrency] = useState(true);

  const [toAmount, setToAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("1");

  function convert(value, amount = "") {
    //method resonsible for the conversion and its related algo
    setToCurrency(value);

    if (amount) {
      setToAmount(amount * fromAmount);
    } else if (conversion_rates) {
      setToAmount(conversion_rates[value] * fromAmount);
    }
  }

  const changeon = (value) => {
    setFromAmount(value);
    setToAmount(value * conversion_rates[toCurrency]);
  };

  const changeon1 = (value) => {
    setToAmount(value);
    setFromAmount(value / conversion_rates[toCurrency]);
    console.log(value, value / conversion_rates[toCurrency]);
  };

  //console.log(+toAmount)

  useEffect(() => {
      if (! authUser) {
        navigate('/login');
    }
    fetch(BASE_URL + base_code)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.base_code)["35"];
        setCurrencyOptions([
          ...new Set([data.base_code, ...Object.keys(data.conversion_rates)]),
          //console.log(data.conversion_rates,`conv rates`)
        ]);
        setConversion_rates(data.conversion_rates);
        setFromCurrency(data.base_code[54]);
        setExchangeRate(data.conversion_rates[fixedcurrency]);
        convert(fixedcurrency, data.conversion_rates[fixedcurrency]);
      });
  }, []);

  const convertFrom = async (value) => {
    await fetch(BASE_URL + value)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConversion_rates(data.conversion_rates);
        setFromCurrency(value);

        convert(toCurrency, data.conversion_rates[toCurrency]);
      });
  };

  return (
    <>
      {!authUser ? (
        <CurrencyLogin />
      ) : (
        <div className="loginCard">
          <h1>Converter</h1>

          <input
            value={fromAmount}
            min={0}
            onChange={(e) => changeon(Math.abs(e.target.value))}
            type="number"
            className="inputConvert"
          />
          <select
            value={fromCurrency}
            onChange={(e) => convertFrom(e.target.value)}
          className="selectConv">
            <option value={""}>Select currency</option>
            {currencyOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="equals">=</div>

          <input
            value={toAmount}
            onChange={(e) => changeon1(Math.abs(e.target.value))}
            type="number"
            className="inputConvert"
          />
          <select value={toCurrency} onChange={(e) => convert(e.target.value)}
          className="selectConv">
            <option value={""} className="optionSelect">Select currency</option>
            {currencyOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>

          
        </div>
      )}
    </>
  );
}

export default CurrrencyConverterPage;
