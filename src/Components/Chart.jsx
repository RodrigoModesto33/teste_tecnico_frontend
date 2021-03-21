import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    title: 'Total de casos'
  }

  render() {
    return (
      <div className="row jumbotron" >
        <div className='col-xl-6' >
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Total de casos",
                fontSize: 30

              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>

        <div className="col-xl-6 ">
          <Pie
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.title,
                fontSize: 30
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default Chart;
