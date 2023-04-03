import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Chart from "react-apexcharts";
import "./style/portfolio.css";
import Predictions from "./predictions.json";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    let mockAapl = [];
    let mockGoog = [];
    let mockMsft = [];
    let aaplCost = 158.28;
    let googCost = 103.06;
    let msftCost = 276.38;

    let dates = [];
    let d = new Date();

    const min = -1;
    const max = 1;
    for (let i = 0; i < 6; i++) {
      let aaplMod = min + Math.random() * (max - min);
      aaplCost = aaplCost + (aaplCost * aaplMod) / 100;
      mockAapl.push(aaplCost);

      let googMod = min + Math.random() * (max - min);
      googCost = googCost + (googCost * googMod) / 100;
      mockGoog.push(googCost);

      let msftMod = min + Math.random() * (max - min);
      msftCost = msftCost + (msftCost * msftMod) / 100;
      mockMsft.push(msftCost);

      let newD = new Date(d - 1000 * 60 * 60 * 24 * (6 - i));
      newD = newD.toDateString().replace(/^\S*/g, "");
      dates.push(newD);
    }

    dates.push(d.toDateString().replace(/^\S*/g, ""));

    Predictions.forEach((pred) => {
      if (pred.ticker == "AAPL") {
        mockAapl.push(pred["close price"]);
      }
      if (pred.ticker == "AAPL") {
        mockGoog.push(pred["close price"]);
      }
      if (pred.ticker == "AAPL") {
        mockMsft.push(pred["close price"]);
      }
    });

    this.state = {
      aaplSeries: [
        {
          name: "AAPL",
          data: mockAapl,
          color: "#E91E63",
        },
      ],
      googSeries: [
        {
          name: "GOOG",
          data: mockGoog,
          color: "#C93CE8",
        },
      ],
      msftSeries: [
        {
          name: "MSFT",
          data: mockMsft,
        },
      ],
      options: {
        chart: {
          type: "line",
        },
        xaxis: {
          categories: dates,
        },
        yaxis: {
          decimalsInFloat: "false",
        },
        forecastDataPoints: {
          count: 1,
        },
      },
      predictions: [],
      aaplProfit: ((mockAapl[6] - mockAapl[0]) * 5).toFixed(2),
      googProfit: ((mockGoog[6] - mockGoog[0]) * 7).toFixed(2),
      msftProfit: ((mockMsft[6] - mockMsft[0]) * 12).toFixed(2),
    };
  }

  render() {
    return (
      <div className="stockContainer">
        <Outlet />
        <h1>Portfolio - Show Logged In User Here</h1>
        <div className="stockDisplay">
          <h2>Apple [AAPL]</h2>
          <h3>Stocks Owned: 5</h3>
          <Chart
            options={this.state.options}
            series={this.state.aaplSeries}
            type="line"
            height={350}
            colors="#2E93fA"
          />
          <h3>Expected Profit: ${this.state.aaplProfit}</h3>
        </div>
        <div className="stockDisplay">
          <h2>Google [GOOG]</h2>
          <h3>Stocks Owned: 7</h3>
          <Chart
            options={this.state.options}
            series={this.state.googSeries}
            type="line"
            height={350}
          />
          <h3>Expected Profit: ${this.state.googProfit}</h3>
        </div>
        <div className="stockDisplay">
          <h2>Microsoft [MSFT]</h2>
          <h3>Stocks Owned: 12</h3>
          <Chart
            options={this.state.options}
            series={this.state.msftSeries}
            type="line"
            height={350}
          />
          <h3>Expected Profit: ${this.state.msftProfit}</h3>
        </div>
      </div>
    );
  }
}

export default Portfolio;
