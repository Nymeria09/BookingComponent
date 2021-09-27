import React, { Component } from 'react';


export class TravelClass extends Component {
  static displayName = TravelClass.name;

  constructor(props){
      super(props);
      this.state = {
          value: "",
          options: [],
      }
  }

  componentDidMount(){
    
    this.setState({options: ["ECONOMY", "PREMIUM" , "BUSINESS", "FIRST"]});
    this.setState({value: this.props.travelclass});
  }

  componentDidUpdate(prevProps) {
    if (this.props.travelclass !== prevProps.travelclass) {
      this.componentDidMount()
    }
  }

  putOptions(){
      const temp = [];
      for (let index = 0; index < this.state.options.length; index++) {
          temp.push(<option key  = {index} value={this.state.options[index]}>{this.state.options[index]}</option>)
      }
      return temp;
  }

  render () {
    return (
      <>
        TRAVEL CLASS<i className = "fas fa-balance-scale w3-text-grey w3-margin-left"></i>
        <select className = "w3-input" value={this.state.value} onChange={this.props.handleChange}>
            {this.putOptions()}
        </select>
      </>
    );
  }
}
