import React, { Component } from "react";
import Async from "react-async";
import { Outlet, useLocation } from "react-router-dom";
import Chart from "react-apexcharts";
import "./style/portfolio.css";
import Predictions from "./predictions.json";
import { API_ENDPOINT } from "../services/api-endpoints";

const sellStock = (stock, qty, price) => {
  alert("Stock Sold!");

  fetch(
    `${API_ENDPOINT}/tradester/sell_stock/?stock=${stock}&quantity=${qty}&price=${price}`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("sell response:\n\n");
      console.log(data);
      window.location.reload(true);
    });
};

const getDates = () => {
  let dates = [];
  let d = new Date();

  for (let i = 0; i < 6; i++) {
    let newD = new Date(d - 1000 * 60 * 60 * 24 * (5 - i));
    newD = newD.toDateString().replace(/^\S*/g, "");
    dates.push(newD);
  }

  let tomorrow = new Date(d);
  tomorrow.setDate(tomorrow.getDate() + 1);

  dates.push(tomorrow.toDateString().replace(/^\S*/g, ""));

  return dates;
};

const state = {
  options: {
    chart: {
      type: "line",
      foreColor: "#fff",
    },
    xaxis: {
      categories: getDates(),
    },
    yaxis: {
      decimalsInFloat: "false",
    },
    forecastDataPoints: {
      count: 1,
    },
  },
};

const genData = (name) => {
  let stockCost = 0;

  Predictions.every((pred) => {
    if (pred.ticker == name) {
      stockCost = pred["close price"];
      return false;
    }

    return true;
  });

  let pred = stockCost;
  stockCost -= 5;
  let data = [];
  const min = -2;
  const max = 3;

  for (let i = 0; i < 6; i++) {
    let stockMod = min + Math.random() * (max - min);
    stockCost = stockCost + (stockCost * stockMod) / 100;
    data.push(stockCost);
  }

  data.push(pred);

  let color = "";
  while (color.length < 7)
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  let setData = [
    {
      name: name,
      data: data,
      color: color,
    },
  ];

  return setData;
};

const loadPortfolio = (id) =>
  fetch(`${API_ENDPOINT}/tradester/display_portfolio/?user_id=${id}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })
    .then((response) => (response.ok ? response : Promise.reject(response)))
    .then((response) => response.json());

const Portfolio = () => {
  let location = useLocation();

  let username = location.state.username;
  let isSelf = location.state.isSelf;
  let userId = isSelf ? "self" : location.state.userId;

  return (
    <Async promiseFn={() => loadPortfolio(userId)}>
      {({ data, error, isLoading }) => {
        let stocks = [];
        if (isLoading) return "";
        if (error) return "Error";
        if (data) {
          const datapoints = Object.keys(data);
          const balance = data[datapoints[0]];
          // X objects in portfolio. Stocks are found from index [1,X-2]

          if (datapoints.length == 3) {
            return (
              <div>
                <h1>{username}'s Portfolio</h1>
                <h1>Balance: ${balance}</h1>
                <h2>Add some stocks to your portfolio!</h2>
              </div>
            );
          }

          for (let i = 1; i < datapoints.length - 2; i++) {
            let stock = [];
            let stockName = datapoints[i];
            stock.push(stockName);
            stock.push(parseInt(data[datapoints[i]].purchase_value));
            stock.push(data[datapoints[i]].purchases);
            stock.push(data[datapoints[i]].quantity_total);
            stock.push(
              parseInt(data[datapoints[i]]["real_" + stockName].real_value)
            );
            let profits = stock[4] - stock[1];
            stock.push(profits);
            stocks.push(stock);
          }
          /**
           * Order of array:
           * stock name
           * purchase value
           * purchases (array)
           * total quantity
           * real value
           * profit
           */
          return (
            <div className="stockContainer">
              <h1>{username}'s Portfolio</h1>
              <h1>Balance: ${balance}</h1>

              {stocks.map((stock) => (
                <div className="stockDisplay">
                  <h2>Stock: [ {stock[0]} ]</h2>
                  <h3>Owned: {stock[3]}</h3>
                  <Chart
                    options={state.options}
                    series={genData(stock[0])}
                    type="line"
                    height={350}
                  />
                  <h3>Profits: ${stock[5]}</h3>
                  {username === localStorage.getItem('username') &&
                    <button
                      className="sellbtn"
                      onClick={() => sellStock(stock[0], stock[3], stock[4])}
                    >
                      Sell
                    </button>
                  }
                </div>
              ))}
            </div>
          );
        }
        return null;
      }}
    </Async>
  );
};

export default Portfolio;
