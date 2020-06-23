import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BounceGraph extends Component {
	constructor(){
		super()
		this.state = {
			height:null
		}
	}

	ballBounce = () => {

	}

  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "dark1", "dark2"
      title: {
        text: "",
      },
      axisY: {
        title: "Height",
        includeZero: false,
				suffix: "m",
      },
      axisX: {
        title: "Time in seconds",
        suffix: "s",
      },
      data: [
        {
          type: "line",
          toolTipContent: "Time {x}s: Height {y}m",
          dataPoints: [
            { x: 10, y: 0 },
            { x: 9, y: 2 },
            { x: 8, y: 0 },
            { x: 7, y: 4 },
            { x: 6, y: 0 },
            { x: 5, y: 6 },
            { x: 4, y: 0 },
            { x: 3, y: 8 },
						{ x: 2, y: 0 },
						{ x: 1, y: 10 },
          ],
        },
      ],
    };

    return (
      <div className="container p-5">
        <h1>Ball Bounce Graph</h1>
        <CanvasJSChart
          options={options}
          onRef={ref => this.chart = ref}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default BounceGraph;


