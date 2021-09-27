import React, { Component } from 'react';
import {PlaceSelector} from './PlaceSelector';
import { OneWay } from './OneWay';
import { Return } from './Return'

export class Form extends Component {
  static displayName = Form.name;

  constructor(props){
      super(props);
      this.state = {
          origin: "",
          destination: "",
          departureDate: "",
          returnDate: "",
          travelClass: "",
          today: "",
          id: "",
      }
      this.handleChangeO = this.handleChangeO.bind(this);
      this.handleChangeD = this.handleChangeD.bind(this);
      this.handleChangeDD = this.handleChangeDD.bind(this);
      this.handleChangeRD = this.handleChangeRD.bind(this);
      this.handleChangeTC = this.handleChangeTC.bind(this);
      this.check = this.check.bind(this);
  }

  handleChangeO(event) {    this.setState({origin: event.target.value}); }
  handleChangeD(event) {    this.setState({destination: event.target.value}); }
  handleChangeDD(event) {    this.setState({departureDate: event.target.value}); }
  handleChangeRD(event) {    this.setState({returnDate: event.target.value}); }
  handleChangeTC(event) {    this.setState({travelClass: event.target.value}); }

  componentDidMount(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
    mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;   

    this.setState({departureDate: today});
    this.setState({returnDate: today});
    this.setState({today: today});
    this.setState({id: this.props.id});
  }

  check()
  {
    return this.props.ready(this.state.id, this.state.travelClass, this.state.origin, this.state.destination, this.state.departureDate, this.state.returnDate);
  }

  change(){
    const temp = [];
    if(this.props.return === true){
      temp.push(<Return today = {this.state.today}  departureDate = {this.state.departureDate} handleChangeDD = {this.handleChangeDD} returnDate = {this.state.returnDate} handleChangeRD = {this.handleChangeRD} travelclass = {this.state.travelClass} handleChange = {this.handleChangeTC} check = {this.check}  />);
    }
    else{ 
      temp.push(<OneWay visibility = {this.props.visibility} today = {this.state.today}  departureDate = {this.state.departureDate} handleChangeDD = {this.handleChangeDD} returnDate = {this.state.returnDate} handleChangeRD = {this.handleChangeRD} travelclass = {this.state.travelClass} handleChange = {this.handleChangeTC} check = {this.check}  />
      );
    }
    return temp;
  }

  render () {
    return (
        <>   
        <div className = "w3-row">

          <div className = "w3-quarter">
            <PlaceSelector text = "ORIGIN" icon = "fas fa-plane-departure w3-text-grey w3-margin-left" place = {this.state.origin} handleChange = {this.handleChangeO} />
          </div>

          <div className = "w3-quarter">
            <PlaceSelector text = "DESTINATION" icon = "fas fa-plane-arrival w3-text-grey w3-margin-left" place = {this.state.destination} handleChange = {this.handleChangeD} />
          </div>

          <div className = "w3-half">

            {this.change()}

          </div>

        </div>

        </>
    );
  }
}
