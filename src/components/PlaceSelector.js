import React, { Component } from 'react';


export class PlaceSelector extends Component {
  static displayName = PlaceSelector.name;

  constructor(props){
      super(props);
      this.state = {
          value: "",
          options: [],
          text:"",
          icon:"",
      }
  }

  componentDidMount(){ 
    this.setState({options: ["LA HAVANA","COPENHAGUE", "AUCKLAND", "PARIS", "MOSCU", "LONDRES"]});
    this.setState({value: this.props.place});
    this.setState({text: this.props.text});
    this.setState({icon: this.props.icon});
  }

  componentDidUpdate(prevProps) {
    if (this.props.place !== prevProps.place) {
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
        {this.state.text}
        <i className = {this.state.icon}></i>
        <select className = "w3-input" value={this.state.value} onChange={this.props.handleChange}>
            {this.putOptions()}
        </select>
      </>
    );
  }
}
