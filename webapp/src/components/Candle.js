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

    this.getDefaultDisplay = this.getDefaultDisplay.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateChart = this.updateChart.bind(this);
    this.updatePortfolio = this.updatePortfolio.bind(this);

    this.getDefaultDisplay();

    this.state = {
      series: [
        {
          data: [],
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
          type: "category",
          tickAmount: 15,
          labels: {
            formatter: function(val) {
              return dayjs(val).format('MMM DD');
            },
            style: {
              fontSize: 12,
            }
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
      currentDescription: "empty",
      currentChange: 0,
      currentStockAmount: 0,
      currentStockPrice: 0
    };
  }

  componentDidMount() {

    const script = document.createElement('script');
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.17/dayjs.min.js";
    document.body.appendChild(script);

  }

  async getDefaultDisplay() {

    let max = 505; // 505 stocks in StockList
    let random = Math.floor(Math.random() * max);

    let newSeries = [];
    let newData = [];
    let ticker = StockList[random].Symbol;
    let description = StockList[random].description
    this.currentStock = ticker;
    this.currentDescription = description

    const url = `${API_ENDPOINT}/tradester/get_stock_data_candle/${ticker}/`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {

        let TSD = res["Time Series (Daily)"];
        this.currentChange = res["Percent Difference"];
        console.log(TSD);
        console.log(this.currentChange);

        for (let key in TSD) {

          let data = {};
          let values = [];

          data.x = key;

          let open = parseFloat(TSD[key]["1. open"]);
          values.push(open);

          let high = parseFloat(TSD[key]["2. high"]);
          values.push(high);

          let low = parseFloat(TSD[key]["3. low"]);
          values.push(low);

          let close = parseFloat(TSD[key]["4. close"]);
          values.push(close);

          data.y = values;

          newData.push(data);
        }

        newData = newData.reverse().slice(40);
        // newData[29] = most recent day, y = O/H/L/C, [3] = close
        // newData[29].y[3] = most recent day close
        this.currentStockPrice = newData[29].y[3];
        newSeries.push({ data: newData });

        this.setState({
          series: newSeries,
          options: {
            title: {
              text: StockList[random].Name + " [" + ticker + "] - " + StockList[random].Sector,
            },
          currentDescription: StockList[random].description
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  updatePortfolio() {
    let newStock = this.currentStock;
    let newAmount = this.currentStockAmount;
    let newPrice = this.currentStockPrice;

    if (newAmount > 0) {

      alert("Stock Added!");

      fetch(
        `${API_ENDPOINT}/tradester/purchase_stock/?stock=${newStock}&quantity=${newAmount}&price=${newPrice}`,
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

  updateChart(ticker, name, description) {
    let newSeries = [];
    let newData = [];
    this.currentDescription = description;
    this.currentStock = ticker;

    const url = `${API_ENDPOINT}/tradester/get_stock_data_candle/${ticker}/`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {

        let TSD = res["Time Series (Daily)"];
        this.currentChange = res["Percent Difference"];

        for (let key in TSD) {
          
          let data = {};
          let values = [];

          data.x = key;

          let open = parseFloat(TSD[key]["1. open"]);
          values.push(open);

          let high = parseFloat(TSD[key]["2. high"]);
          values.push(high);

          let low = parseFloat(TSD[key]["3. low"]);
          values.push(low);

          let close = parseFloat(TSD[key]["4. close"]);
          values.push(close);

          data.y = values;

          newData.push(data);
        }

        newData = newData.reverse().slice(40);
        // newData[29] = most recent day, y = O/H/L/C, [3] = close
        // newData[29].y[3] = most recent day close
        this.currentStockPrice = newData[29].y[3];
        newSeries.push({ data: newData });

        this.setState({
          series: newSeries,
          options: {
            title: {
              text: name
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
        label: stock.Name + " [" + stock.Symbol + "] - " + stock.Sector,
        description: stock.description
      });
    });

    let p_diff = this.currentChange

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
            this.updateChart(stock.value, stock.label, stock.description);
          }}
          className="select"
        />
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={"75%"}
          className="chart"
        />
        <p>{this.currentDescription}</p>
        <div className="purchase">
          <button onClick={this.updatePortfolio}>Purchase</button>
          <input type="number" onChange={this.updateAmount}></input>
          {p_diff > 0 ? 
            <p className="green">Recommended - Value Expected to increase by {p_diff}%</p> 
          : <p className="red">Not Recommended  - Value Expected to decrease by {Math.abs(p_diff)}%</p>}
        </div>
      </motion.div>
    );
  }
}

export default Candle;
