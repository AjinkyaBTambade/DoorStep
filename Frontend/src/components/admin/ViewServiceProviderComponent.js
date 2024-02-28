import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive'

 class ViewServiceProviderComponent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             id:this.props.match.params.id,
             serviceprovider: {}
        }
    }
    
    componentDidMount(){
         ServiceProviderSerive.getServiceproviderById(this.state.id).then( res => {
             this.setState({serviceprovider:res.data});

         });
    }

    render() {
        return (
            <div className="profile">
                <br></br>
             <div className="card col-md-6 offset-md-3 " style={{textAlign: 'center', marginLeft: 330, padding:120 ,
         paddingBottom:100 , background:'rgba(255,255,255,.0)' , }}>
                <h3 className="text-center" id="h2"> Service Provider's Details</h3>
                   <div className="card-body">
                       <div className="row"> 
                         <label id="label"> FirstName  : </label>
                         <div id="label">{this.state.serviceprovider.firstName}</div>
                       </div>
                      
                       <div className="row"> 
                         <label id="label"> lastName  : </label>
                         <div id="label">{this.state.serviceprovider.lastName}</div>
                       </div>

                       <div className="row"> 
                         <label id="label"> serviceType  : </label>
                         <div id="label">{this.state.serviceprovider.serviceType}</div>
                       </div>

                       <div className="row"> 
                         <label id="label"> serviceCost  : </label>
                         <div id="label">{this.state.serviceprovider.serviceCost}</div>
                       </div>

                       <div className="row"> 
                         <label id="label"> email  : </label>
                         <div id="label">{this.state.serviceprovider.email}</div>
                       </div>

                       <div className="row"> 
                         <label id="label"> contactNo  : </label>
                         <div id="label">{this.state.serviceprovider.contactNo}</div>
                       </div>

                       <div className="row"> 
                         <label id="label"> experience  : </label>
                         <div id="label">{this.state.serviceprovider.experience}</div>
                       </div>

                       <div className="row"> 
                         <label id="label"> rating  : </label>
                         <div id="label">{this.state.serviceprovider.rating}</div>
                       </div>
                   </div>

                 </div> 
            </div>
        )
    }
}

export default ViewServiceProviderComponent
