import React, { Component } from 'react';


export class FlightType extends Component {
  static displayName = FlightType.name;

  constructor(props){
      super(props);
      this.state = {
          value: "",
          options: [],
      }
  }

  componentDidMount(){ 
    this.setState({options: ["ONE-WAY", "RETURN", "MULTI-CITY"]});
    this.setState({value: this.props.flightType});
  }

  componentDidUpdate(prevProps) {
    if (this.props.flightType !== prevProps.flightType) {
      this.componentDidMount()
    }
  }

  putOptions(){
      const temp = [];
      for (let index = 0; index < this.state.options.length; index++) {
          temp.push(<option key = {index} value={this.state.options[index]}>{this.state.options[index]}</option>)
      }
      return temp;
  }

  render () {
    return (
      <>
        FLIGHT TYPE<i className = "far fa-map w3-text-grey w3-margin-left"></i>
        <select className = "w3-input" value={this.state.value} onChange={this.props.handleChange}>
            {this.putOptions()}
        </select>
      </>
    );
  }
}
