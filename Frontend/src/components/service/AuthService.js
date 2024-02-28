import axios from 'axios'

const API_URL = 'http://localhost:4444/admin'

class AuthService {
  login(email, password) {
    const fd = new FormData()
    fd.append('email', email)
    fd.append('password', password)

    return axios
      .post('http://localhost:4444/customer/login', fd)
      .then((response) => {
        if (response) {
          // console.log('RESPONSE.DATA', response.data)
         
          sessionStorage.setItem('user', JSON.stringify(response.data))
          debugger
          console.log(response.data)
        }
        return response
      })
  }

  logout() {
    sessionStorage.removeItem('user')
  }

  register(
    firstName,
    lastName,
    email,
    password,
    contactNo,
    houseNo,
    street,
    area,
    landmark
  ) {
    const fd = new FormData()
    fd.append('firstName', firstName)
    fd.append('lastName', lastName)
    fd.append('email', email)
    fd.append('password', password)
    fd.append('contactNo', contactNo)
    fd.append('houseNo', houseNo)
    fd.append('street', street)
    fd.append('area', area)
    fd.append('landmark', landmark)

    return axios
      .post('http://localhost:4444/customer/register', fd)
      .then((response) => {
        return response
      })
  }

  AdminLogin(email, password) {
    const fd1 = new FormData()
    fd1.append('email', email)
    fd1.append('password', password)

    return axios
      .post('http://localhost:4444/admin/login', fd1)
      .then((response) => {
        if (response) {
          console.log('RESPONSE.DATA', response.data)
          sessionStorage.setItem('user', JSON.stringify(response.data))
          console.log(response.data)
        }
        return response
      })
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'))
  }
}

export default new AuthService()
