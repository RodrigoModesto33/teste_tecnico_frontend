import React, { Component } from "react";
import api from './Api'
import Chart from './Chart';
export default class Grafics extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {},
      casos:{}
      
    }
  }
  state = { chartData: [] }

  async componentDidMount() {
    const response = await api.get('cases?country=Brazil')
    console.log(response.data)
    this.casos = response.data 
    console.log(this.casos)
  }

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {

    this.setState({
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Boston',
            data: [
              617594,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div style={{ marginTop: '4rem' }}>
        <div >
          <h2 style={{ textAlign: 'center' }}>Welcome to React</h2>
        </div>
        <div className="jumbotron " style={{ borderRadius: '50px' }}>
          <div>
            <Chart chartData={this.state.chartData} title='' legendPosition="bottom" />
          </div>
        </div>
      </div>
    )
  }
}