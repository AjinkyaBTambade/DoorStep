import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardFooter,
  CardHeader,
} from 'reactstrap'
// import { CardColumns, CardDeck, CardGroup } from 'react-bootstrap'
import {} from './customer/GetServices'

class AllServices extends Component {


constructor(props) {
  super(props)
  this.state={serviceType:null}

   this.listofBarbers = this.listofBarbers.bind(this);
   this.listofCarpenters = this.listofCarpenters.bind(this);
   this.listofMaids = this.listofMaids.bind(this);
   this.listofPainters = this.listofPainters.bind(this);
   this.listofPlumbers = this.listofPlumbers.bind(this);
   this.listofElectrician = this.listofElectrician.bind(this)

}


 listofBarbers(serviceType){
  this.props.history.push(`/list-ServiceProviders/${serviceType}`);
 }

  listofCarpenters(serviceType){
    this.props.history.push(`/list-ServiceProviders/${serviceType}`); 
  }
 
  listofMaids(serviceType){
    this.props.history.push(`/list-ServiceProviders/${serviceType}`); 
  }
 
  listofPainters(serviceType){
    this.props.history.push(`/list-ServiceProviders/${serviceType}`); 
  }
  
  listofPlumbers(serviceType){
    this.props.history.push(`/list-ServiceProviders/${serviceType}`); 
  }

  listofElectrician(serviceType){
    this.props.history.push(`/list-ServiceProviders/${serviceType}`); 
  }

  render() {
   
   
    return (
      
      <div>
        <div >
        <Card
          style={{
            width: '24rem',
            marginLeft: 50,
            marginRight: 900,
            marginBottom: 45,
            marginTop: 90,
          }}>
       

          <CardBody>
          <CardImg src="./images/Barber44.jpg"></CardImg>

            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Barber
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
          
              Here is the list of "Barbers" in your area, just click here and choose as per your convinience.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 120 }}
              onClick={()=>{
                             this.listofBarbers('Barber')}}>
              Click Here
            </Button>
          </CardBody>
        </Card>

        <Card
          style={{
            width: '24rem',
            marginLeft: 600,
            marginRight: 400,
            marginBottom: 50,
            marginTop: -424,
          }}>
         

          <CardBody>
          <CardImg src="./images/Carpenter44.jpg"></CardImg>

            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
             Carpenter
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
            Here is the list of "Carpenters" in your area, just click here and choose as per your convinience.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 110 }}
              onClick={()=>{
                             this.listofCarpenters('Carpenter')}}>
              Click Here
            </Button>
          </CardBody>
        </Card>

        <Card
         // className="cardcss"
          style={{
            width: '24rem',
            marginLeft: 50,
            marginRight: 900,
            marginBottom: 45,
            marginTop: 50,
          }}>
         

          <CardBody>
          <CardImg src="./images/Maid44.jpg"></CardImg>

            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Maid
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
            Here is the list of "Maids" in your area, just click here and choose as per your convinience.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 120 }}
              onClick={()=>{
                             this.listofMaids('Maid')}}>
               Click Here
            </Button>
          </CardBody>
        </Card>

        <Card
          style={{
            width: '24rem',
            marginLeft: 600,
            marginRight: 900,
            marginBottom: 50,
            marginTop: -399,
          }}>
       

          <CardBody>
          <CardImg src="./images/Painter44.jpg"></CardImg>

            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Painter
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
            Here is the list of "Painters" in your area, just click here and choose as per your convinience.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 110 }}
              onClick={()=>{
                             this.listofPainters('Painter')}}>
               Click Here
            </Button>
          </CardBody>
        </Card>

        <Card
          style={{
            width: '24rem',
            marginLeft: 1100,
            marginRight: 900,
            marginBottom: 1150,
            marginTop: -431,
          }}>
      

          <CardBody>
          <CardImg src="./images/Plumber44.jpg"></CardImg>

            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Plumber
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
            Here is the list of "Plumbers" in your area, just click here and choose as per your convinience.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 110 }}
              onClick={()=>{
                             this.listofPlumbers('Plumber')}}>
               Click Here
            </Button>
          </CardBody>
        </Card>

        <Card
          style={{
            width: '24rem',
            marginLeft: 1100,
            marginRight: 900,
            marginBottom: 50,
            marginTop: -1957,
          }}>


          <CardBody>
          <CardImg src="./images/Electrician44.jpg"></CardImg>

            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Electrician
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
            Here is the list of "Electrician" in your area, just click here and choose as per your convinience.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 110 }}
              onClick={()=>{
                             this.listofElectrician('Electrician')}}>
               Click Here
            </Button>
          </CardBody>
        </Card>

        </div> 

      </div>
          
    );
  }
}

export default AllServices;