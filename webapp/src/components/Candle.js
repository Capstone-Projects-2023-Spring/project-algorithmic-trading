import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import Select from "react-select";
import StockList from "./constituents.json";
import { motion } from "framer-motion";
import "./style/candle.css";
import { API_ENDPOINT } from "../services/api-endpoints";

class Candle extends Component {
  constructor(props) {
    super(props);

    this.updateAmount = this.updateAmount.bind(this);
    this.updateChart = this.updateChart.bind(this);
    this.updatePortfolio = this.updatePortfolio.bind(this);

    this.state = {
      series: [
        {
          data: []
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          foreColor: "#fff",
        },
        title: {
          text: "",
          align: "middle",
          style: {
            fontSize: 25,
          },
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: {
              fontSize: 12,
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            style: {
              fontSize: 12,
            },
          },
        },
      },
      currentStock: "empty",
      currentStockAmount: 0,
      currentStockPrice: 0,
    };
  }

  updatePortfolio() {
    let newStock = this.currentStock;
    let newAmount = this.currentStockAmount;
    let newPrice = this.currentStockPrice;

    if (newAmount > 0) {
      console.log("Stock: " + newStock);
      console.log("Amount: " + newAmount);
      console.log("Price: " + newPrice);

      fetch(
        `${API_ENDPOINT}/tradester/update_portfolio/?stock=${newStock}&quantity=${newAmount}&price=${newPrice}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          fetch(`${API_ENDPOINT}/tradester/display_portfolio/`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("display portfolio:\n\n");
              console.log(data);
            });
        });
    }
  }

  updateAmount = (event) => {
    this.currentStockAmount = event.target.value;
  };

  updateChart(ticker, name) {
    let newSeries = [];
    let newData = [];
    this.currentStock = ticker;

    const url = `${API_ENDPOINT}/tradester/get_stock_data_candle/${ticker}/`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        let TSD = res["Time Series (Daily)"];

        for (let key in TSD) {
          let data = [];

          let date = new Date(key);
          //date = Math.floor(date.getTime() / 1000);
          data.push(date);

          let open = parseFloat(TSD[key]["1. open"]);
          data.push(open);

          let high = parseFloat(TSD[key]["2. high"]);
          data.push(high);

          let low = parseFloat(TSD[key]["3. low"]);
          data.push(low);

          let close = parseFloat(TSD[key]["4. close"]);
          data.push(close);

          newData.push(data);
        }

        newData = newData.reverse().slice(70);
        this.currentStockPrice = newData[29][1];
        newSeries.push({ data: newData });

        this.setState({
          series: newSeries,
          options: {
            title: {
              text: name,
            },
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const options = [{ value: "", label: "" }];
    options.pop();

    StockList.forEach((stock) => {
      options.push({
        value: stock.Symbol,
        label: stock.Name + " [" + stock.Symbol + "]",
      });
    });

    return (
      <motion.div
        className="candlediv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Select
          options={options}
          maxMenuHeight={500}
          onChange={(stock) => {
            this.updateChart(stock.value, stock.label);
          }}
          className="select"
        />
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={"88%"}
          className="chart"
        />
        <div>
          <button onClick={this.updatePortfolio}>Purchase</button>
          <input type="number" onChange={this.updateAmount}></input>
        </div>
      </motion.div>
    );
  }
}

export default Candle;
