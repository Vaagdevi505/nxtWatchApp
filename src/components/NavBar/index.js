import {Component} from 'react'
import {withRouter, Link, Redirect} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoIosMoon, IoIosSunny} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  CancelButton,
  ConfirmButton,
  CustomPopup,
  LogoutIcon,
  LogoutText,
  NavbarContainer,
  NavbarLogo,
  NavItem,
  NavItemsContainer,
  NavLogoContainer,
  PopupButtons,
  PopupText,
  ThemeToggle,
  UserProfileImage,
} from './styledComponents'

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
            <NavbarContainer className={themeClass}>
              <Link to="/">
                <NavLogoContainer>
                  <NavbarLogo src={logoUrl} alt="website logo" />
                </NavLogoContainer>
              </Link>
              <NavItemsContainer>
                <NavItem>
                  <ThemeToggle
                    type="button"
                    onClick={onToggleTheme}
                    data-testid="theme"
                  >
                    {isDarkTheme ? (
                      <IoIosSunny size={30} color="#ffffff" />
                    ) : (
                      <IoIosMoon size={30} color="#222" />
                    )}
                  </ThemeToggle>
                </NavItem>
                <NavItem>
                  <UserProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavItem>
                <NavItem>
                  <Popup
                    trigger={
                      <button type="button" className="logout-btn">
                        <LogoutText>Logout</LogoutText>
                        <LogoutIcon>
                          <FiLogOut size={27} />
                        </LogoutIcon>
                      </button>
                    }
                    modal
                    nested
                  >
                    {close => (
                      <CustomPopup>
                        <PopupText>Are you sure, you want to logout</PopupText>
                        <PopupButtons>
                          <CancelButton type="button" onClick={close}>
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            type="button"
                            onClick={() => {
                              this.handleConfirmLogout()
                              close()
                            }}
                          >
                            Confirm
                          </ConfirmButton>
                        </PopupButtons>
                      </CustomPopup>
                    )}
                  </Popup>
                </NavItem>
              </NavItemsContainer>
              {showPopup && <div className="popup-overlay"> </div>}
            </NavbarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(NavBar)
