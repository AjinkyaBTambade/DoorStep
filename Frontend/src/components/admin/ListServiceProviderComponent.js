import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive'

export class ListServiceProviderComponent extends Component {
    
constructor(props) {
    super(props)

    this.state = {
         serviceproviders:[]
    }

    this.addServiceprovider = this.addServiceprovider.bind(this);
    this.editServiceprovider = this.editServiceprovider.bind(this);
    this.deleteServiceprovider = this.deleteServiceprovider.bind(this);
    this.viewServiceprovider = this.viewServiceprovider.bind(this);
}

 deleteServiceprovider(id){
   ServiceProviderSerive.deleteServiceprovider(id).then((res) =>{
     this.setState({serviceproviders: this.state.serviceproviders.filter(serviceprovider => serviceprovider.id !== id)});  
   });
 }

 viewServiceprovider(id){
    this.props.history.push(`/view-serviceprovider/${id}`)
 }

editServiceprovider(id){
   this.props.history.push(`/update-serviceprovider/${id}`);
}


componentDidMount(){
    ServiceProviderSerive.getServiceproviders().then((res) => {
        this.setState({
            serviceproviders: res.data
        });
    });
}

addServiceprovider(){
    this.props.history.push('/add-serviceprovider');
}

    render() {
        return (
            <div className="customerlist">
                <h2 className="text-center" id="h2s"> Service Provoder's List</h2>
                <div >
                    <button className="btn btn-primary" style={{marginLeft:620}}  onClick={this.addServiceprovider}>Add Service Provider</button>
                </div>
                <br></br>
                <div className="row"style={{padding:40,marginRight:60}}>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                           
                            <th id="labels">First Name</th>
                            <th id="labels">Last Name</th>
                            <th id="labels">Service Type</th>
                            <th id="labels">Service Cost</th>
                            <th id="labels">Email</th>
                            <th id="labels">Contact No</th>
                            <th id="labels">Experience</th>
                            <th id="labels">Rating</th>
                            {/* <th >users</th> */}
                            <th id="labels"> Actions</th>
                         </tr> 
                        </thead>

                        <tbody  id="labelvendor">
                            {
                                this.state.serviceproviders.map(
                                    serviceprovider => 
                                    <tr key ={serviceprovider.id}>
                                        <td > {serviceprovider.firstName}</td>
                                        <td > {serviceprovider.lastName}</td>
                                        <td > {serviceprovider.serviceType}</td>
                                        <td > {serviceprovider.serviceCost}</td>
                                        <td > {serviceprovider.email}</td>
                                        <td > {serviceprovider.contactNo}</td>
                                        <td > {serviceprovider.experience}</td>
                                        <td > {serviceprovider.rating}</td>
                                        
                                        <td > 
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.editServiceprovider(serviceprovider.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.deleteServiceprovider(serviceprovider.id)} className="btn btn-danger">Delete</button>
                                            <button  style={{marginLeft:"10px"}} onClick={ () => this.viewServiceprovider(serviceprovider.id)} className="btn btn-info">View</button>

                                        </td>
                                        

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default ListServiceProviderComponent
