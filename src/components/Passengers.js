import React, { Component } from 'react';


export class Passenger extends Component {
  static displayName = Passenger.name;

  constructor(props){
      super(props);
      this.state = {
          valueadults: 1,
          valuechilds: 0,
          valueinfant: 0,
          value: 1,
          options: [],
      }
      this.handleChangeVA = this.handleChangeVA.bind(this);
      this.handleChangeVC = this.handleChangeVC.bind(this);
      this.handleChangeVI = this.handleChangeVI.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){ 
    this.setState({value: this.props.passengers})
  }

  componentDidUpdate(prevProps) {
    if (this.props.passengers !== prevProps.passengers) {
      this.componentDidMount()
    }
  }

  handleChangeVA(event){
    this.setState({valueadults: event.target.value });
    this.handleChange();
  }

  handleChangeVC(event){
    this.setState({valuechilds: event.target.value });
    this.handleChange();
  }

  handleChangeVI(event){
    this.setState({valueinfant: event.target.value });
    this.handleChange();
  }

  handleChange(){
    this.props.handleChange(parseInt(this.state.valueadults) + parseInt(this.state.valuechilds) + parseInt(this.state.valueinfant) );
  }

  putOptions(){
      const temp = [];
      for (let index = 0; index < this.state.options.length; index++) {
          temp.push(<option key = {index} value={this.state.options[index]}> {this.state.options[index]}</option>)
      }
      return temp;
  }

  render () {
    return (
       <>
            <div className = "w3-row">
                <div className = "w3-third">
                  ADULTS<i className = "fas fa-user w3-text-grey w3-margin-left"></i>
                  <input className = "w3-input" type = "number" min = {this.state.valueinfant} value = {this.state.valueadults} onChange={this.handleChangeVA} />
                </div>
                <div className = "w3-third">
                  CHILDS<i className = "fas fa-child w3-text-grey w3-margin-left"></i>
                  <input  className = "w3-input" type = "number" min = "0" value = {this.state.valuechilds} onChange={this.handleChangeVC} />
                </div>
                <div className = "w3-third">
                  INFANT<i className = "fas fa-baby w3-text-grey w3-margin-left"></i>
                  <input  className = "w3-input" type = "number" min = "0" max = {this.state.valueadults} value = {this.state.valueinfant} onChange={this.handleChangeVI} />
                </div>
            </div>
       </>
    );
  }
}
