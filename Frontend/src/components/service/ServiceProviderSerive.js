import axios from 'axios'

const SERVICEPROVIDER_API_BASE_URL = 'http://localhost:4444/admin'

class ServiceProviderSerive {
  getServiceproviders() {
    return axios.get(SERVICEPROVIDER_API_BASE_URL + '/AllVendors')
  }

  createServiceprovider(vendor) {
    return axios.post(SERVICEPROVIDER_API_BASE_URL + '/AddVendor', vendor)
  }

  getServiceproviderById(serviceproviderId) {
    return axios.get(
      SERVICEPROVIDER_API_BASE_URL + '/AllVendors/' + serviceproviderId
    )
  }

  updateServiceProvider(serviceprovider, serviceproviderId) {
    return axios.put(
      SERVICEPROVIDER_API_BASE_URL + '/' + serviceproviderId,
      serviceprovider
    )
  }

  // updateServiceProvider(serviceprovider){
  //     return axios.put(SERVICEPROVIDER_API_BASE_URL + '/update' + serviceprovider)
  // }

  deleteServiceprovider(serviceproviderId) {
    return axios.delete(SERVICEPROVIDER_API_BASE_URL + '/' + serviceproviderId)
  }

  getcustomers() {
    return axios.get(SERVICEPROVIDER_API_BASE_URL + '/AllCustomers')
  }

  getCustomerById(customerId) {
    return axios.get(
      SERVICEPROVIDER_API_BASE_URL + '/AllCustomers/' + customerId
    )
  }

  deleteCustomer(customerId) {
    return axios.delete(
      SERVICEPROVIDER_API_BASE_URL + '/customer/' + customerId
    )
  }

  getServiceByServiceType(serviceType) {
    return axios.get('http://localhost:4444/provider/' + serviceType)
  }

  bookService(vendorId) {
    console.log('in bookService in service folder!')
    const customer = JSON.parse(window.sessionStorage.getItem('user'))
    console.log('in bookService in service folder!', customer)
    console.log('in bookService in service folder!', customer.id)
    const customerId = customer.id
    const body = {
      customerId,
      vendorId,
    }
    console.log('Body:', body)
    return axios.post('http://localhost:4444/book', body)
  }


  getHistory(custId){
    return axios.get('http://localhost:4444/History/' + custId)
  }
  // getServiceByServiceType(serviceType) {
  //   return axios.get(SERVICEPROVIDER_API_BASE_URL + '/provider/'+serviceType)
  // }
  // getServiceByServiceType(serviceType) {
  //   return axios.get(SERVICEPROVIDER_API_BASE_URL + '/provider/Electrician')
  // }
  // getServiceByServiceType(serviceType) {
  //   return axios.get(SERVICEPROVIDER_API_BASE_URL + '/provider/Barber')
  // }
  // getServiceByServiceType(serviceType) {
  //   return axios.get(SERVICEPROVIDER_API_BASE_URL + '/provider/Plumber')
  // }
  // getServiceByServiceType(serviceType) {
  //   return axios.get(SERVICEPROVIDER_API_BASE_URL + '/provider/Painter')
  // }
}

export default new ServiceProviderSerive()
