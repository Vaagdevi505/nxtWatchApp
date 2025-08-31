import {Component} from 'react'
import {withRouter, Link, Redirect} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoIosMoon, IoIosSunny} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class NavBar extends Component {
  state = {loggedOut: false}

  handleConfirmLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    this.setState({loggedOut: true, showPopup: false})
    history.replace('/login')
  }

  render() {
    const {loggedOut, showPopup} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (!jwtToken || loggedOut) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const onToggleTheme = () => {
            toggleTheme()
          }

          const themeClass = isDarkTheme ? 'dark-theme-nav' : 'light-theme-nav'
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <div className={`navbar-container ${themeClass}`}>
              <Link to="/">
                <div className="nav-logo-container">
                  <img
                    src={logoUrl}
                    alt="website logo"
                    className="navbar-logo"
                  />
                </div>
              </Link>
              <ul className="nav-items-container">
                <li className="nav-item theme-toggle">
                  <button
                    type="button"
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    data-testid="theme"
                  >
                    {isDarkTheme ? (
                      <IoIosSunny size={30} color="#ffffff" />
                    ) : (
                      <IoIosMoon size={30} color="#222" />
                    )}
                  </button>
                </li>
                <li className="nav-item">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="user-profile-img"
                  />
                </li>
                <li className="nav-item">
                  <Popup
                    trigger={
                      <button type="button" className="logout-btn">
                        <span className="logout-text">Logout</span>
                        <FiLogOut size={27} className="logout-icon" />
                      </button>
                    }
                    modal
                    nested
                  >
                    {close => (
                      <div className="custom-popup">
                        <p className="popup-text">
                          Are you sure, you want to logout
                        </p>
                        <div className="popup-buttons">
                          <button
                            type="button"
                            className="popup-btn cancel-btn"
                            onClick={close}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="popup-btn confirm-btn"
                            onClick={() => {
                              this.handleConfirmLogout()
                              close()
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </li>
              </ul>
              {showPopup && <div className="popup-overlay"> </div>}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(NavBar)
