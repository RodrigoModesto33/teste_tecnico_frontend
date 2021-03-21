import React, { Component } from "react";
import Axios from "axios";
import Chart from './Chart';
export default class Grafics extends Component {


  constructor(props) {

    super(props);
    this.state = {
      chartData: props.chartData || {}
    };
  }
  state = { chartData: [] }

  getchartData(states, num) {
    this.setState(
      {
        chartData: {
          labels: states,
          datasets: [
            {
              label: "N°.de Casos",
              data: num,
              backgroundColor: [
                "rgba(255,3,0,1)",
                "rgba(219,3,0,1)",
                "rgba(152,3,0,1)",
                "rgba(255,3,0,0.7)",
                "rgba(101,191,217,1)",
                "rgba(101,191,217,0.59)",
                "rgba(101,79,161,0.98)",
                "rgba(208,79,197,0.98)",
                "rgba(208,79,197,0.65)",
                "rgba(43,144,197,1)"
              ]
            }
          ]
        }
      },
      () => {
        console.log(this.state.chartData);
      }
    );
  }

  componentDidMount() {
    Axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => {
        this.setState({ posts: response.data.data });
        const posts = response.data.data;
        var states = [];
        var num = [];

        for (var i = 1; i < posts.length; i += 1) {
          states[i - 1] = posts[i].state;
          num[i - 1] = posts[i].cases;
        }
        this.getchartData(states, num);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    return (

      <div style={{ marginTop: '4rem' }}>
        <div >
          <h2 style={{ textAlign: 'center' }}>Casos no Brasil</h2>
        </div>
        <div>
          <div>
            {Object.keys(this.state.chartData).length > 0 && (
              <Chart chartData={this.state.chartData} />
            )} </div>
        </div>
      </div>


    )
  }
}