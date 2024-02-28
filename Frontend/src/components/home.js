import React, { Component } from 'react'
//import image from '../images/citymain.jpg'
import '../css/home.css'
import { Carousel } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Navigation from './Navigation'

class home extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
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
              <Link to={'/customer/{id}'} className="nav-link">
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Logout
              </Link>
            </li>
          </div>
        </nav> */}

     
        <Carousel>
          <Carousel.Item interval={2000}>
            <img style={{alignSelf:'center'}}
              className="d-block w-100 "
              src="./images/Barber44.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Barber</h2>
              {/* <h3>Want Some Attention?</h3> */}
              <p>
                Want Some Attention? Here,Choose Barber who will help you to
                groome
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="./images/Carpenter44.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Carpenter</h3>
              <p>
                Want Some maintainance for you furniture,check skillfull
                carpenters in your area
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="./images/Maid44.jpg" 
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Maid</h3>
              <p>
                Tired of finding perfect maid for you? then you should check
                these maids once
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="./images/Plumber44.jpg"
              alt="Forth slide"
            />
            <Carousel.Caption>
              <h3>Plumber</h3>
              <p>
                Want a good Plumber to fix your plumbing problem?Here it is!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="./images/Electrician44.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>ELectrician</h3>
              <p>
                Here are some good Electricians who will fix your problems
                regarding electricity.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="./images/Painter44.jpg"
              alt="Sixth slide"
            />
            <Carousel.Caption>
              <h3>Painter</h3>
              <p>
                Want to paint your Beautiful House,just check these brilliant
                Painters
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default home
