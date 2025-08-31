import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

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
            <div className="not-found-view">
              <img src={imageUrl} alt="not found" className="not-found-image" />
              <h1 className="not-found-title">Page Not Found</h1>
              <p className="not-found-text">
                we are sorry, the page you requested could not be found.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
