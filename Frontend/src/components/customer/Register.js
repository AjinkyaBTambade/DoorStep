import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import AuthService from '../service/AuthService'
import '../../css/home.css'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}

//firstName, lastName, email, password, contactNo, houseNo, street, area, landmark)
export default class Register extends Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeLastname = this.onChangeLastname.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangemobileNo = this.onChangemobileNo.bind(this)
    this.onChangeCPassword = this.onChangeCPassword.bind(this)
    this.onChangehouseNo = this.onChangehouseNo.bind(this)
    this.onChangestreet = this.onChangestreet.bind(this)
    this.onChangearea = this.onChangearea.bind(this)
    this.onChangeLandmark = this.onChangeLandmark.bind(this)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cpassword: '',
      contactNo: '',
      houseNo: '',
      street: '',
      area: '',
      landmark: '',
      successful: false,
      message: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      firstName: e.target.value,
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastName: e.target.value,
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  onChangeCPassword(e) {
    this.setState({
      cpassword: e.target.value,
    })
  }

  onChangemobileNo(e) {
    this.setState({
      contactNo: e.target.value,
    })
  }

  onChangehouseNo(e) {
    this.setState({
      houseNo: e.target.value,
    })
  }

  onChangestreet(e) {
    this.setState({
      street: e.target.value,
    })
  }

  onChangearea(e) {
    this.setState({
      area: e.target.value,
    })
  }

  onChangeLandmark(e) {
    this.setState({
      landmark: e.target.value,
    })
  }

  handleRegister(e) {
    if (
      this.state.firstName === '' &&
      this.state.lastName === '' &&
      this.state.email === '' &&
      this.state.password === '' &&
      this.state.contactNo === null &&
      this.state.houseNo === '' &&
      this.state.street === '' &&
      this.state.area === '' &&
      this.state.landmark === ''
    ) {
      alert('Enter All Details')
    } else if (this.state.password !== this.state.cpassword) {
      alert('Password MisMatch')
    } else {
      e.preventDefault()

      this.setState({
        message: '',
        successful: false,
      })

      this.form.validateAll()
      //firstName, lastName, email, password, contactNo, houseNo, street, area, landmark)
      if (this.checkBtn.context._errors.length === 0) {
        AuthService.register(
          this.state.firstName,
          this.state.lastName,
          this.state.email,
          this.state.password,
          this.state.contactNo,
          this.state.houseNo,
          this.state.street,
          this.state.area,
          this.state.landmark
        ).then(
          (response) => {
            this.setState({
              message: response.data.message,
              successful: true,
            })

            alert('Registered Successfully')
            window.location = '/login'
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()

            this.setState({
              successful: false,
              message: resMessage,
            })
          }
        )
      }
    }
  }

  render() {
    return (
      <div
        className="col-md-12 register" 
       >
        <div className="col-md-4"></div>
        <div className="col-md-4" style={{marginLeft: '35%' , }}>
          <h2 >Registration Form</h2>
          <div className="card card-container" style={{marginLeft: '590',background:'rgba(255,255,255,.0)' }}>
            <Form
              onSubmit={this.handleRegister}
              ref={(c) => {
                this.form = c
              }}>
              {!this.state.successful && (
                <div >
                  {/* //firstName, lastName, email, password, contactNo, houseNo, street, area, landmark) */}
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Input
                      style={{ width: 300, marginLeft: 90}}
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChangeLastname}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="email"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.cpassword}
                      onChange={this.onChangeCPassword}
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactNo">Contact Number</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="text"
                      className="form-control"
                      name="contactNo"
                      value={this.state.contactNo}
                      onChange={this.onChangemobileNo}
                      validations={[required]}
                    />
                  </div>

                  {/* houseNo, street, area, landmark) */}

                  <div className="form-group">
                    <label htmlFor="houseNo">House Number</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="text"
                      className="form-control"
                      name="houseNo"
                      value={this.state.houseNo}
                      onChange={this.onChangehouseNo}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="text"
                      className="form-control"
                      name="street"
                      value={this.state.street}
                      onChange={this.onChangestreet}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="area">Area</label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="text"
                      className="form-control"
                      name="area"
                      value={this.state.area}
                      onChange={this.onChangearea}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="landmark" style={{ fontFamily: 'inherit' }}>
                      Landmark
                    </label>
                    <Input
                       style={{ width: 300, marginLeft: 90 }}
                      type="text"
                      className="form-control"
                      name="landmark"
                      value={this.state.landmark}
                      onChange={this.onChangeLandmark}
                      validations={[required]}
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ width: 200, marginLeft: 135 }}>
                    <button className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                  </div>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? 'alert alert-success'
                        : 'alert alert-danger'
                    }
                    role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: 'none' }}
                ref={(c) => {
                  this.checkBtn = c
                }}
              />
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
