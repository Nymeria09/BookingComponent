import React, { Component } from 'react';


export class DateSelector extends Component {
  static displayName = DateSelector.name;

  constructor(props){
      super(props);
      this.state = {
          value: "",
          min: "",
          text:"",
          icon:"",
      }
  }

  componentDidMount(){ 

    this.setState({value: this.props.date});
    this.setState({min: this.props.min});
    this.setState({text: this.props.text});
    this.setState({icon: this.props.icon});

    var date = this.props.date;
    var min = this.props.min;

    if (date < min){
      this.setState({value: this.props.min});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.componentDidMount()
    }
    else if (this.props.min !== prevProps.min) {
        this.componentDidMount()
      }
  }

  render () {
    return (
      <>
        {this.state.text}
        <i className = {this.state.icon}></i>
        <input className = "w3-input" type = "date" min = {this.state.min} value = {this.state.value} onChange = {this.props.handleChange} />
      </>
    );
  }
}
