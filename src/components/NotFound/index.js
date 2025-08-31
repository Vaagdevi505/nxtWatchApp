import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import {
  NotFoundImage,
  NotFoundText,
  NotFoundTitle,
  NotFoundView,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <NavBar />
          <MenuBar />
          <div className="main-content">
            <NotFoundView>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundTitle>Page Not Found</NotFoundTitle>
              <NotFoundText>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundView>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
