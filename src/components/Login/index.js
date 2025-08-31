import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginButton,
  LoginButtonContainer,
  LoginErrorMessage,
  LoginFormContainer,
  LoginFormLabel,
  LoginImage,
  LoginImageContainer,
  LoginInput,
  LoginInputContainer,
  LoginPageContainer,
  LoginShowPasswordContainer,
  LoginText,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errMsg: '',
    showPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
    })
    history.replace('/')
  }

  loginFailure = errMsg => {
    this.setState({showErrMsg: true, errMsg})
  }

  submitFormDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrMsg, errMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPageContainer>
              <LoginFormContainer onSubmit={this.submitFormDetails}>
                <LoginImageContainer>
                  <LoginImage src={logoUrl} alt="website logo" />
                </LoginImageContainer>
                {showErrMsg && (
                  <LoginErrorMessage> *{errMsg} </LoginErrorMessage>
                )}
                <LoginInputContainer>
                  <LoginFormLabel htmlFor="login-username">
                    USERNAME
                  </LoginFormLabel>
                  <LoginInput
                    type="text"
                    value={username}
                    name="login-username"
                    id="login-username"
                    placeholder="Username"
                    onChange={this.onChangeUserName}
                    required
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginFormLabel htmlFor="login-password">
                    PASSWORD
                  </LoginFormLabel>
                  <LoginInput
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    name="login-password"
                    id="login-password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    required
                  />
                </LoginInputContainer>
                <LoginShowPasswordContainer>
                  <input
                    type="checkbox"
                    name="show-password"
                    id="show-password"
                    onChange={this.togglePassword}
                    checked={showPassword}
                  />
                  <label htmlFor="show-password">Show Password</label>
                </LoginShowPasswordContainer>
                <LoginButtonContainer>
                  <LoginButton type="submit">Login</LoginButton>
                </LoginButtonContainer>
                <LoginText>
                  Login and explore with pre-filled credentials
                </LoginText>
              </LoginFormContainer>
            </LoginPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
