import React, { Component } from 'react'
import ServiceProviderSerive from '../service/ServiceProviderSerive';
import '../../css/home.css'

class CreateServiceProviderComponent extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
           //step2
        // id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        serviceType: '',
        serviceCost: '',
        email:'',
        contactNo:'',
        experience:'',
        rating:''
       }

       this.saveServiceprovider = this.saveServiceprovider.bind(this);
   }
//    //step3
//    componentDidMount(){
//     //step4
//     if(this.state.id === '_add'){
//         return 
//     }else{
//         ServiceProviderSerive.getServiceproviderById(this.state.id).then( (res) =>{
//             let serviceprovider =res.data;
//             this.setState({firstName:serviceprovider.firstName,
//                 lastName:serviceprovider.lastName,
//                 serviceType:serviceprovider.serviceType,
//                 serviceCost:serviceprovider.serviceCost,
//                 email:serviceprovider.email,
//                 contactNo:serviceprovider.contactNo,
//                 experience:serviceprovider.experience,
//                 rating:serviceprovider.rating,
            
//             });
//         });
//     }
//     }


    
           saveServiceprovider = (e) => {
           e.preventDefault();
           let serviceprovider = {firstName: this.state.firstName, lastName: this.state.lastName, serviceType: this.state.serviceType, serviceCost: this.state.serviceCost, email: this.state.email, contactNo: this.state.contactNo,
            experience: this.state.experience, rating:this.state.rating};
            console.log('serviceprovider => ' + JSON.stringify(serviceprovider));
           
            ServiceProviderSerive.createServiceprovider(serviceprovider).then(res => {
                this.props.history.push('/list-serviceprovider');
         });

   }

   onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        cancel(){
            this.props.history.push('/list-serviceprovider');
        }
    

    render() {
        return (
            <div className="register" >
               <br></br>
                <div className="container">  
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3"  style={{textAlign: 'center', marginLeft: 330, padding:80 ,
         paddingBottom:10 , background:'rgba(255,255,255,.0)' , }}>
                            <h3 className="text-center"> Add Service Provider</h3>
                            <div className="card-body">
                                <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>ServiceType:</label>
                    <input type="text" placeholder="service type" name="serviceType" className="form-control" value={this.state.serviceType} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>serviceCost:</label>
                    <input type="number" placeholder="service Cost" name="serviceCost" className="form-control" value={this.state.serviceCost} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>contactNo:</label>
                    <input type="number" placeholder="contactNo" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>experience:</label>
                    <input type="number" placeholder="experience" name="experience" className="form-control" value={this.state.experience} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Rating:</label>
                    <input type="number" placeholder="rating" name="rating" className="form-control" value={this.state.rating} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveServiceprovider}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default CreateServiceProviderComponent
