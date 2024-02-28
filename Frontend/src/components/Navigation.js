import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Navigation extends Component {
  constructor(props){
    super(props)
    this.state={
      username:null
    }

  }
  componentDidMount(){
    if(sessionStorage.getItem('user')!= undefined)
    this.setState({
      username:JSON.parse(sessionStorage.getItem('user'))
    }) 
  }


  logout() {
    sessionStorage.removeItem('user')
    window.location = '/'
  }
  render() {
    
   
    // console.log(username.id);
    return (
      
      <div>
         
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand">
            <h2>DoorStep</h2>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li>
          </div>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/login'} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/admin/login'} className="nav-link">
                Admin
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/register'} className="nav-link">
                Sign Up
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/about'} className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item">

              {this.state.username && <Link to={`/customer/${this.state.username.id}`}  
                     className="nav-link">
                Profile
              </Link>}
            </li>

            <li className="nav-item">
            <a ref="logout" onClick={this.logout}>
                <button type="button" className="btn btn-dark">
                  Logout
                </button>
              </a>
            </li>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navigation;