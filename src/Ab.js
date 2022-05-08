import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export class Ab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isValid: false,
      message: '',
      isSubmitted: false,
      name: '',
      value: '',
    }
  }

  emailValidatation = (data) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(re.test(data))
    return re.test(data)
  }

  // passwordValidatation = (data) => {
  //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     console.log(re.test(data))
  //     return re.test(data)
  // }

  setOnChangeEvent = (e) => {
    // this.setState({ email: e.target.value })
    // console.log(e.target.value)
    let { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  // changepassword = (e) => {
  //     this.setState({ password: e.target.value })
  //     console.log(e.target.value)
  //     // let { name, value } = e.target
  //     // this.setState({
  //     //     [name]: value
  //     // })
  // }

  checked = (email, password) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(password))
    console.log(re.test(email))
    console.log(password)
    console.log(email)
  }

  handleSubmitGFunc = (e) => {
    e.preventDefault()
    this.setState({
      isSubmitted: true,
    })
  }

  validatation = (isSubmitted) => {
    const validObj = {
      isValid: true,
      message: '',
    }
    let isValid = true
    const retData = {
      email: validObj,
      password: validObj,
      isValid,
    }
    const { email, password } = this.state
    if (isSubmitted) {
      if (!email) {
        retData.email = {
          isValid: false,
          message: 'please Enter a Email',
        }
      } else if (!this.emailValidatation) {
        retData.email = {
          isValid: false,
          message: 'Enter a valid Valid Email',
        }
        isValid = false
      }
      if (!password) {
        retData.password = {
          isValid: false,
          message: 'Enter a PAASWORD',
        }
      }
    }
    retData.isValid = isValid
    return retData
  }

  render() {
    const { email, password, isSubmitted } = this.state
    let validationDataInnerFunc = this.validatation(isSubmitted)

    return (
      <form
      //  action=""
      //  onClick={this.validatation}
      >
        <div>
          <h1> SIGN IN..... </h1>
          <h1> SIGN IN..... </h1>
          <h1> SIGN IN..... </h1>
          <br /> <br />
          <div>
            <label htmlFor=""> Email Adress: </label>{' '}
            <input
              type="text"
              placeholder="Please Enter your Email - "
              name="email"
              value={email}
              onChange={(e) => this.setOnChangeEvent}
            />{' '}
            {!validationDataInnerFunc.email.isValid && (
              <span> {validationDataInnerFunc.email.message} </span>
            )}
            {!validationDataInnerFunc.email.message && (
              <span class="invalid-feedback">
                {' '}
                {validationDataInnerFunc.email.message}{' '}
              </span>
            )}{' '}
          </div>
          <div>
            <label htmlFor=""> Password: </label>{' '}
            <input
              type="password"
              placeholder="PLease Enter your Password"
              onChange={(e) => this.setOnChan}
              name="passaword"
              value={password}
            />{' '}
            {!validationDataInnerFunc.password.message && (
              <span> {validationDataInnerFunc.password.message} </span>
            )}{' '}
          </div>
          <Button onClick={this.handleSubmitGFunc}> SubMit </Button>{' '}
        </div>{' '}
      </form>
    )
  }
}

export default Ab
