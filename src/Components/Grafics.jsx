import React, { Component } from "react";
import Axios from "axios";
import { Bar, Pie } from 'react-chartjs-2';
export default class Grafics extends Component {

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    title: 'Total de casos'
  }

  constructor(props) {

    super(props);
    this.state = {
      chartData: props.chartData || {},
      chartData1: props.chartData || {}
    };
  }
  state = { chartData: [], chartData1: [] }

  getchartData(states, num) {
    this.setState(
      {
        chartData: {
          labels: states,
          datasets: [
            {
              label: "N°. de Casos",
              data: num,
              backgroundColor: [
                "rgba(235,3,100,1)",
                "rgba(219,30,200,1)",
                "rgba(152,3,100,1)",
                "rgba(255,3,0,0.7)",
                "rgba(101,191,217,1)",
                "rgba(101,191,217,0.59)",
                "rgba(101,79,161,0.98)",
                "rgba(208,79,197,0.98)",
                "rgba(208,79,197,0.65)",
                "rgba(43,144,197,1)",
                "rgba(255,255,255,0,5)",
                "rgba(0,0,255,1)",
                "rgba(255,0,0,1)", "rgba(235,3,100,1)",
                "rgba(219,30,200,1)",
                "rgba(152,3,100,1)",
                "rgba(255,3,0,0.7)",
                "rgba(101,191,217,1)",
                "rgba(101,191,217,0.59)",
                "rgba(101,79,161,0.98)",
                "rgba(208,79,197,0.98)",
                "rgba(208,79,197,0.65)",
                "rgba(43,144,197,1)",
                "rgba(255,255,255,0,5)",
                "rgba(0,0,255,1)",
                "rgba(255,0,0,1)",


              ]
            }
          ]
        },
      },
      () => {
        console.log(this.state.chartData)
      }
    );


  }

  getchartData1(states, num) {
    this.setState(
      {
        chartData1: {
          labels: states,
          datasets: [
            {
              label: "N°. de óbitos",
              data: num,
              backgroundColor: [
                "rgba(235,3,100,1)",
                "rgba(219,30,200,1)",
                "rgba(152,3,100,1)",
                "rgba(255,3,0,0.7)",
                "rgba(101,191,217,1)",
                "rgba(101,191,217,0.59)",
                "rgba(101,79,161,0.98)",
                "rgba(208,79,197,0.98)",
                "rgba(208,79,197,0.65)",
                "rgba(43,144,197,1)",
                "rgba(255,255,255,0,5)",
                "rgba(0,0,255,1)",
                "rgba(255,0,0,1)", "rgba(235,3,100,1)",
                "rgba(219,30,200,1)",
                "rgba(152,3,100,1)",
                "rgba(255,3,0,0.7)",
                "rgba(101,191,217,1)",
                "rgba(101,191,217,0.59)",
                "rgba(101,79,161,0.98)",
                "rgba(208,79,197,0.98)",
                "rgba(208,79,197,0.65)",
                "rgba(43,144,197,1)",
                "rgba(255,255,255,0,5)",
                "rgba(0,0,255,1)",
                "rgba(255,0,0,1)",


              ]
            }
          ]
        },
      },
      () => {
        console.log(this.state.chartData1)
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

    Axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => {
        this.setState({ posts1: response.data.data });
        const posts1 = response.data.data;
        var states1 = [];
        var num1 = [];

        for (var i = 1; i < posts1.length; i += 1) {
          states1[i - 1] = posts1[i].state;
          num1[i - 1] = posts1[i].deaths;
        }
        this.getchartData1(states1, num1);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    return (
      <div style={{marginTop: '4rem' }}>
        <h2 style={{textAlign:'center'}}>Acompanhamento dos casos do novo coronavírus(covid-19) no Brasil</h2>
        <div className=" jumbotron" style={{ borderRadius: '20px'}} >
          <div>
            {Object.keys(this.state.chartData).length > 0 && (
              <Pie data={this.state.chartData} options={{
                title: {
                  display: this.props.displayTitle,
                  text: "Número de casos notificados por estado",
                  fontSize: 30

                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                }
              }}/>
            )}
          </div>
          <div>
            <div>
              {Object.keys(this.state.chartData1).length > 0 && (
                <Bar
                  data={this.state.chartData1}
                  options={{
                    title: {
                      display: this.props.displayTitle,
                      text: "Número de óbitos por estado",
                      fontSize: 30

                    },
                    legend: {
                      display: this.props.displayLegend,
                      position: this.props.legendPosition
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

    )
  }
}