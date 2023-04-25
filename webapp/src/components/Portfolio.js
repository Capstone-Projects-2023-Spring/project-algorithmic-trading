import React, { Component, useEffect } from "react";
import Async from "react-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import "./style/portfolio.css";
import { API_ENDPOINT } from "../services/api-endpoints";
import { isLoggedIn } from "../services/authentication";

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

const state = {
  options: {
    chart: {
      type: "line",
      foreColor: "#fff",
    },
    yaxis: {
      decimalsInFloat: "false",
      labels: {
        formatter: function (value) {
          return value.toFixed(2);
        }
      },
    },
    forecastDataPoints: {
      count: 1,
    },
  },
};

const genData = (name, data) => {
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
  const navigate = useNavigate();

  let username = location.state.username;
  let isSelf = location.state.isSelf;
  let userId = isSelf ? "self" : location.state.userId;
  let loggedIn = location.state.loggedIn;

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    }
  })

  if (loggedIn === false) return;
  
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

            let close_values = []
            let close_dates = []
            for (let close_value of data[datapoints[i]].close_values) {
              let date = new Date(close_value.date);
              
              close_values.push(close_value.price);
              close_dates.push(
                date.toLocaleDateString('en-US', {
                  timeZone: 'UTC',
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })
              );
              console.log(close_value.date);
              console.log(date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                }));
            }
            stock.push(close_values);
            stock.push(close_dates);

            if (!state.options.xaxis) {
              state.options.xaxis = {
                categories: close_dates,
              };
            }
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
                    series={genData(stock[0], stock[6])}
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
