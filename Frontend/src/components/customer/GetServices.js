import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive'
import swal from 'sweetalert'

export class GetServices extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //match.params.
      serviceType: this.props.match.params.serviceType,
      serviceproviders: [],
    }
  }

  componentDidMount() {
    ServiceProviderSerive.getServiceByServiceType(this.state.serviceType).then(
      (res) => {
        console.log(res.data)
        this.setState({
          serviceproviders: res.data,
        })
      }
    )
  }

  bookService(vendorId) {
    console.log('clicked book button!')
    ServiceProviderSerive.bookService(vendorId)
      .then((res) => {
        console.log('in then of bookService')
        console.log(res.data)
        console.log('Booking Succesfull!!')
        alert('Booking Succesfull!!')
        swal({
          title: 'Booked!',
          text: 'Thank you!',
          icon: 'success',
          button: 'Ok',
          timer: 4000,
        })

        window.location = '/Allservices'
      })
      .catch((error) => {
        console.log('in catch of bookService')
        console.log(error)
      })
  }

  render() {
    return (
      <div className="customerlist">
        <h2 className="text-center" id="h2s">
          Service Providers
        </h2>
        <div className="row" style={{ padding: 40, marginRight: 60 }}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th className="hidden">Id</th> */}
                <th id="labels">First Name</th>
                <th id="labels">Last Name</th>
                <th id="labels">Service Type</th>
                <th id="labels">Service Cost</th>
                <th id="labels">Email</th>
                <th id="labels">Contact</th>
                <th id="labels">Experience</th>
                <th id="labels">Rating</th>
                <th id="labels">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.serviceproviders.map((serviceprovider) => (
                <tr key={serviceprovider.serviceType}>
                  <td id="label"> {serviceprovider.firstName}</td>
                  <td id="label"> {serviceprovider.lastName}</td>
                  <td id="label"> {serviceprovider.serviceType}</td>
                  <td id="label"> {serviceprovider.serviceCost}</td>
                  <td id="label"> {serviceprovider.email}</td>
                  <td id="label"> {serviceprovider.contactNo}</td>
                  <td id="label"> {serviceprovider.experience}</td>
                  <td id="label"> {serviceprovider.rating}</td>
                  {/* <td> {serviceprovider.users}</td> */}
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={(e) => {
                        // console.log(e)
                        console.log(sessionStorage.get)
                        this.bookService(serviceprovider.id)
                      }}>
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default GetServices
