import React from "react";
import { Outlet } from "react-router-dom";
import "./style/chart.css";
import "./style/data.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import { setOptions } from "react-chartjs-2/dist/utils";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    data: [33, 53, 85, 41, 44, 65],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)",
  }]
};

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

const Dashboard = () => {

  function callAPI(ticker) {

    var closes: number[] = []
    var dates: string[] = []

    console.log("Ticker: " + ticker)

    const api = "2JMCN347HZ3BU9RC"
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="
      + ticker + "&outputsize=compact&apikey=" + api

    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((res) => {

        let TSD = res["Time Series (Daily)"];

        for (let key in TSD) {
          let data = TSD[key]["5. adjusted close"]
          let close: number = + data
          dates.push(key.toString())
          closes.push(close)
        }

        closes = closes.reverse().slice(70);
        dates = dates.reverse().slice(70);
        console.log("Closes: " + closes)
        console.log("Dates: " + dates)

        let chart = ChartJS.getChart("chart");
        if (!chart) return;

        chart.data.labels = dates
        chart.data.datasets[0].data = closes

        chart.update();

      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="container">
      <div className="data">
        <Outlet />
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
        <div className="linechart">
          <Line
            data={data}
            id="chart"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
