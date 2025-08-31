import {NavLink} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

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
  <MenuBarContainer>
    <MenuItems>
      <MenuItem>
        <NavLink
          exact
          to="/"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <button type="button">
            <AiFillHome size={27} />
            <MenuItemText>Home</MenuItemText>
          </button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/trending"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <button type="button">
            <HiFire size={27} />
            <MenuItemText>Trending</MenuItemText>
          </button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/gaming"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <button type="button">
            <SiYoutubegaming size={27} />
            <MenuItemText>Gaming</MenuItemText>
          </button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/saved-videos"
          className="menu-link"
          activeClassName="active-menu-link"
        >
          <button type="button">
            <MdPlaylistAdd size={30} />
            <MenuItemText>Saved Videos</MenuItemText>
          </button>
        </NavLink>
      </MenuItem>
    </MenuItems>

    <ContactUs>
      <ContactUsTitle>Contact Us</ContactUsTitle>
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
      <ContactUsText>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsText>
    </ContactUs>
  </MenuBarContainer>
)

export default MenuBar
