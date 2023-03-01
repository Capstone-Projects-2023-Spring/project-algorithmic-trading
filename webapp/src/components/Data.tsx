import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./style/data.css";

const Data = () => {

  const stocks = [
    {
      name: "Google",
      ticker: "GOOG",
    },
    {
      name: "Amazon",
      ticker: "AMZN",
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
    },
  ]

  function callAPI(ticker) {

    console.log("Ticker: " + ticker)

    const api = "2JMCN347HZ3BU9RC"
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="
      + ticker + "&outputsize=compact&apikey=" + api

    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let TSD = data["Time Series (Daily)"];
        for (let key in TSD) {
          let adjclose = TSD[key]["5. adjusted close"]
          console.log("Date: " + key + " Adj. Close: " + adjclose)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="data">
      <Outlet />
      <h1>Data</h1>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Ticker</th>
          </tr>
        </thead>
        {stocks.map((val, key) => {
          return (
            <tbody onClick={() => callAPI(val.ticker)}>
              <tr key={key}>
                <td>{val.name}</td>
                <td>[{val.ticker}]</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
};

export default Data;