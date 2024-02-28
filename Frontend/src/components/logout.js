import React, { Component } from 'react';
import ServiceProviderSerive from '../components/service/ServiceProviderSerive'
import AuthService from '../components/service//AuthService'

class logout extends Component {
  constructor(props){
    super(props)
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    if (sessionStorage.getItem("user") !== null) {
      const username = JSON.parse(sessionStorage.getItem('user'))
      
      this.useRef().username.innerHTML = username.email
      this.useRef().logout.innerHTML = 'Logout'
      // let element = document.getElementById('profilename')
      // AuthService.getCurrentUser()
    }
  }

  
  logout() {
    sessionStorage.removeItem('user')
    window.location = '/'
  }

  
  render() {
    return (
      <div>
         <a ref="logout" onClick={this.logout}>
                <button type="button" className="btn btn-danger">
                  Logout
                </button>
              </a>
      </div>
    );
  }
}

export default logout;