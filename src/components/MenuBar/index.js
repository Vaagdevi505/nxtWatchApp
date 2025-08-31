import {NavLink} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'


import {
  ContactUs,
  ContactUsLink,
  ContactUsLinks,
  ContactUsText,
  ContactUsTitle,
  MenuBarContainer,
  MenuItem,
  MenuItems,
  MenuItemText,
} from './styledComponents'

const MenuBar = () => (
  <ThemeContext.Consumer>
  {value => {
    const {isDarkTheme} = value
    return (
      <MenuBarContainer isDarkTheme={isDarkTheme}>
        <MenuItems>
      <MenuItem>
        <NavLink
          exact
          to="/"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <AiFillHome size={27} />
          <MenuItemText>Home</MenuItemText>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/trending"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <HiFire size={27} />
          <MenuItemText>Trending</MenuItemText>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/gaming"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <SiYoutubegaming size={27} />
          <MenuItemText>Gaming</MenuItemText>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/saved-videos"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <MdPlaylistAdd size={30} />
          <MenuItemText>Saved Videos</MenuItemText>
        </NavLink>
      </MenuItem>
    </MenuItems>

    <ContactUs>
      <ContactUsTitle isDarkTheme={isDarkTheme}>Contact Us</ContactUsTitle>
      <ContactUsLinks>
        <ContactUsLink>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
        </ContactUsLink>
        <ContactUsLink>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
        </ContactUsLink>
        <ContactUsLink>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactUsLink>
      </ContactUsLinks>
      <ContactUsText isDarkTheme={isDarkTheme}>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsText>
    </ContactUs>
      </MenuBarContainer>
    )
  }}
</ThemeContext.Consumer>
)

export default MenuBar