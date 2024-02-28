import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive'
import '../../css/home.css'
export class HistoryPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [],
    }
  }

  componentDidMount() {
    const id = JSON.parse(sessionStorage.getItem('user')).id
    console.log('custId: ', id)
    ServiceProviderSerive.getHistory(id)
      .then((res) => {
        console.log(res.data)
        this.setState({
          history: res.data,
        })
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  render() {
    return (
      <div className="history">
        <h2
          className="text-center" id="h2s">
           Customer's History
        </h2>

        
        <div className="row" style={{ marginRight:40,padding: 70}}>
          <table className="table table-striped table-bordered">
            <thead id="label">
              <tr>
                <th>LogNo</th>
                {/* <th>CustId</th>
                <th>VendorId</th> */}
                <th>Customer Email</th>
                <th>Vendor Email</th>
                <th> ServiceType</th>
                <th> Service Cost</th>
                <th> Experience</th>

              </tr>
            </thead>

            <tbody id="label">
              {this.state.history.map((h) => (
                //
                <tr>
                  <td> {h.logNo}</td>
                  {/* <td> {h.cust.id}</td> */}
                  {/* <td> {h.vendor.id}</td> */}
                  <td> {h.customerEmail}</td>
                  <td> {h.vendorEmail}</td>
                  <td> {h.serviceType}</td>
                  <td> {h.cost}</td>
                  <td> {h.experience}</td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default HistoryPage
