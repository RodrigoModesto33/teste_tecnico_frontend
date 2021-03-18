import React, { Component } from "react";
import { Bar } from 'react-chartjs-2'
import api from './Api'
export default class Grafics extends Component {


  state = { chartData: [] }
  
  async componentDidMount() {
    const response = await api.get('cases?country=Brazil')
    console.log(response.data)
    this.setState({ casos: response.data })
  }


  getChartData() {
    const { casos } = this.state;

    this.setState({
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Casos',
            data: [
              
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div style={{ marginTop: '4rem', }}>
        <div className="Container">
          <h2 style={{ textAlign: 'center' }}>Welcome to React</h2>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', }}>
          <div style={{ display: 'flex', width: "50%" }}>
            <Bar chartData={this.state.casos} location={'casos.show.name'} legendPosition="bottom" />
          </div>
          <div style={{ display: 'flex', width: "50%" }}>
            <Bar chartData={this.state.casos} location="Massachusetts" legendPosition="bottom" />
          </div>
        </div>
        <br/>
        <div style={{ alignItems: 'center', display: 'flex', }}>
          <div style={{ display: 'flex', width: "50%" }}>
            <Bar chartData={this.state.casos} location="Massachusetts" legendPosition="bottom" />
          </div>
          <div style={{ display: 'flex', width: "50%" }}>
            <Bar chartData={this.state.casos} location="Massachusetts" legendPosition="bottom" />
          </div>
        </div>
      </div>
    )
  }
}