import react from 'react'

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
import { CardColumns, CardDeck, CardGroup } from 'react-bootstrap'

class AdminPage extends react.Component {
  listServiceProvider() {
    window.location = '/list-serviceprovider'
  }

  listCustomer() {
    window.location = '/list-customer'
  }

  render() {
    return (
      <div>
        <Card
          style={{
            width: '24rem',
            marginLeft: 350,
            marginRight: 900,
            marginBottom: 45,
            marginTop: 100,
          }}>
          <CardHeader>
            <CardImg src="./images/customer1.jpg"></CardImg>
          </CardHeader>

          <CardBody>
            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Customer
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
              In this we can get all customer's data available and as per
              requirement we cancan do some changes.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 120 }}
              onClick={this.listCustomer}>
              Customer
            </Button>
          </CardBody>
        </Card>
        {/* <Card>
          <CardBody>
            <Button color="primary" onClick={this.listCustomer}>
              Customer
            </Button>
          </CardBody>
        </Card> */}

        <Card
          style={{
            width: '24rem',
            marginLeft: 850,
            marginRight: 900,
            marginBottom: 50,
            marginTop: -529,
          }}>
          <CardHeader>
            <CardImg src="./images/img011.jpg"></CardImg>
          </CardHeader>

          <CardBody>
            <CardTitle style={{ fontFamily: 'fantasy', fontSize: 30 }}>
              Service Provider
            </CardTitle>
            <CardText style={{ fontFamily: 'cursive' }}>
              In this we can get all Vendor,s's data and as per requirement we
              can do some changes in Vendor like add,update,delete etc.
            </CardText>

            <Button
              color="primary"
              style={{ fontSize: 20, marginLeft: 90 }}
              onClick={this.listServiceProvider}>
              Service Provider
            </Button>
          </CardBody>
        </Card>
      </div>

      //     <div>
      //     <button color="primary" onClick={this.listServiceProvider}>Service Provider</button>

      // </div>
    )
  }
}

export default AdminPage
