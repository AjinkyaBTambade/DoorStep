import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
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

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.state = {
      email: '',
      password: '',
      loading: false,
      message: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleLogin(e) {
    e.preventDefault()

    this.setState({
      message: '',
      loading: true,
    })

    this.form.validateAll()

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          window.location = '/Allservices'
        },
        (error) => {
          this.setState({
            loading: false,
            message: 'Invalid Login Details',
          })
        }
      )
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    return (
      <div className='customerlogin'>
      <div
        style={{textAlign: 'center', marginLeft: 330, padding:125 , paddingBottom:230  }}
        className="col-md-10">
        <div class="col-md-6">
          <div className="card card-container" style={{background:'rgba(255,255,255,.0)' , boxShadow:'0 5px 15px rgba(0,0,0,.5)'}}>
            <h2 id="h2">
              Customer Login
            </h2>

            <Form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c
              }}>
              <div className="form-group" >
                <label id="label" htmlFor="username">Email</label>
                <Input
                  style={{ width: 300, marginLeft: 70  }}
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.email}
                  onChange={this.onChangeUsername}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label id="label" htmlFor="password">Password</label>
                <Input
                  style={{ width: 300, marginLeft: 70 }}
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button
                  style={{ width: 200, marginLeft: 125 }}
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}>
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
                <div className="form-group">
                  <p>
                    Not registerd ? <a href="/register"> Sign Up</a>
                  </p>
                </div>
              </div>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
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
      </div>
    )
  }
}