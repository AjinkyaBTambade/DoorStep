import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive'
import '../../css/home.css'

export class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      customer: {},
      history: {},
    }
  }

  seeHistory() {
    this.props.history.push(`/history`)
  }

  componentDidMount() {
    ServiceProviderSerive.getCustomerById(this.state.id).then((res) => {
      this.setState({ customer: res.data })
    })
  }
  //firstName, lastName, email, password, contactNo, houseNo, street, area, landmark)
  render() {
    return (
      <div className="profile">
        <br></br>
        
        <div className="card col-md-6 offset-md-3 " style={{textAlign: 'center', marginLeft: 330, padding:120 ,
         paddingBottom:100 , background:'rgba(255,255,255,.0)' , }}
>
          <h3 id="h2" className="text-center">" Customer's Details"</h3>
          <div className="card-body">
            <div className="row">
              <label id="label"> First Name : </label>
              <div id="label">{this.state.customer.firstName}</div>
            </div>

            <div className="row">
              <label  id="label"> Last Name : </label>
              <div id="label">{this.state.customer.lastName}</div>
            </div>

            <div className="row">
              <label  id="label"> Email : </label>
              <div id="label">{this.state.customer.email}</div>
            </div>

            <div className="row">
              <label  id="label"> Contact Number : </label>
              <div id="label">{this.state.customer.contactNo}</div>
            </div>

            <div className="row">
              <label  id="label"> House Number : </label>
              <div id="label">{this.state.customer.houseNo}</div>
            </div>

            <div className="row">
              <label  id="label"> Street : </label>
              <div id="label">{this.state.customer.street}</div>
            </div>

            <div className="row">
              <label  id="label"> Area : </label>
              <div id="label">{this.state.customer.area}</div>
            </div>

            <div className="row">
              <label  id="label"> Landmark : </label>
              <div id="label">{this.state.customer.landmark}</div>
            </div>
          </div>

          <button
            onClick={() => this.seeHistory()}
            className="btn btn-info float-end">
            History
          </button>
        </div>
        
      </div>
    )
  }
}

export default Profile
