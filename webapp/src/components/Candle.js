import React, { Component } from "react";
import Chart from "react-apexcharts";
import Select from "react-select";
import StockList from "./constituents.json";
import { motion } from "framer-motion";
import "./style/candle.css";

class Candle extends Component {
  constructor(props) {
    super(props);

    this.updateChart = this.updateChart.bind(this);

    this.state = {
      series: [
        {
          data: [
            [1538778600000, 6629.81, 6650.5, 6623.04, 6633.33],
            [1538780400000, 6632.01, 6643.59, 6620, 6630.11],
            [1538782200000, 6630.71, 6648.95, 6623.34, 6635.65],
            [1538784000000, 6635.65, 6651, 6629.67, 6638.24],
            [1538785800000, 6638.24, 6640, 6620, 6624.47],
            [1538787600000, 6624.53, 6636.03, 6621.68, 6624.31],
            [1538789400000, 6624.61, 6632.2, 6617, 6626.02],
            [1538791200000, 6627, 6627.62, 6584.22, 6603.02],
            [1538793000000, 6605, 6608.03, 6598.95, 6604.01],
            [1538794800000, 6604.5, 6614.4, 6602.26, 6608.02],
            [1538796600000, 6608.02, 6610.68, 6601.99, 6608.91],
            [1538798400000, 6608.91, 6618.99, 6608.01, 6612],
            [1538800200000, 6612, 6615.13, 6605.09, 6612],
            [1538802000000, 6612, 6624.12, 6608.43, 6622.95],
            [1538803800000, 6623.91, 6623.91, 6615, 6615.67],
            [1538805600000, 6618.69, 6618.74, 6610, 6610.4],
            [1538807400000, 6611, 6622.78, 6610.4, 6614.9],
            [1538809200000, 6614.9, 6626.2, 6613.33, 6623.45],
            [1538811000000, 6623.48, 6627, 6618.38, 6620.35],
            [1538812800000, 6619.43, 6620.35, 6610.05, 6615.53],
            [1538814600000, 6615.53, 6617.93, 6610, 6615.19],
            [1538816400000, 6615.19, 6621.6, 6608.2, 6620],
            [1538818200000, 6619.54, 6625.17, 6614.15, 6620],
            [1538820000000, 6620.33, 6634.15, 6617.24, 6624.61],
            [1538821800000, 6625.95, 6626, 6611.66, 6617.58],
            [1538823600000, 6619, 6625.97, 6595.27, 6598.86],
            [1538825400000, 6598.86, 6598.88, 6570, 6587.16],
            [1538827200000, 6588.86, 6600, 6580, 6593.4],
            [1538829000000, 6593.99, 6598.89, 6585, 6587.81],
            [1538830800000, 6587.81, 6592.73, 6567.14, 6578],
            [1538832600000, 6578.35, 6581.72, 6567.39, 6579],
            [1538834400000, 6579.38, 6580.92, 6566.77, 6575.96],
            [1538836200000, 6575.96, 6589, 6571.77, 6588.92],
            [1538838000000, 6588.92, 6594, 6577.55, 6589.22],
            [1538839800000, 6589.3, 6598.89, 6589.1, 6596.08],
            [1538841600000, 6597.5, 6600, 6588.39, 6596.25],
            [1538843400000, 6598.03, 6600, 6588.73, 6595.97],
            [1538845200000, 6595.97, 6602.01, 6588.17, 6602],
            [1538847000000, 6602, 6607, 6596.51, 6599.95],
            [1538848800000, 6600.63, 6601.21, 6590.39, 6591.02],
            [1538850600000, 6591.02, 6603.08, 6591, 6591],
            [1538852400000, 6591, 6601.32, 6585, 6592],
            [1538854200000, 6593.13, 6596.01, 6590, 6593.34],
            [1538856000000, 6593.34, 6604.76, 6582.63, 6593.86],
            [1538857800000, 6593.86, 6604.28, 6586.57, 6600.01],
            [1538859600000, 6601.81, 6603.21, 6592.78, 6596.25],
            [1538861400000, 6596.25, 6604.2, 6590, 6602.99],
            [1538863200000, 6602.99, 6606, 6584.99, 6587.81],
            [1538865000000, 6587.81, 6595, 6583.27, 6591.96],
            [1538866800000, 6591.97, 6596.07, 6585, 6588.39],
            [1538868600000, 6587.6, 6598.21, 6587.6, 6594.27],
            [1538870400000, 6596.44, 6601, 6590, 6596.55],
            [1538872200000, 6598.91, 6605, 6596.61, 6600.02],
            [1538874000000, 6600.55, 6605, 6589.14, 6593.01],
            [1538875800000, 6593.15, 6605, 6592, 6603.06],
            [1538877600000, 6603.07, 6604.5, 6599.09, 6603.89],
            [1538879400000, 6604.44, 6604.44, 6600, 6603.5],
            [1538881200000, 6603.5, 6603.99, 6597.5, 6603.86],
            [1538883000000, 6603.85, 6605, 6600, 6604.07],
            [1538884800000, 6604.98, 6606, 6604.07, 6606],
          ],
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          foreColor: "#fff",
        },
        title: {
          text: "Mock Data",
          align: "middle",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  }

  updateChart(ticker, name) {
    let newSeries = [];
    let newData = [];

    const url = "https://tradester-backend.onrender.com/tradester/get_stock_data_candle/" + ticker + "/";

    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
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
        console.table(newData);
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

    console.table(options);

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
          height={500}
          className="chart"
        />
      </motion.div>
    );
  }
}

export default Candle;
