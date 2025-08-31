import {SiYoutubegaming} from 'react-icons/si'
import GamingVideos from '../GamingVideos'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'

import {GamingBanner, GamingBannerTitle, MainContent} from './styledComponents'

const Gaming = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <NavBar />
          <MenuBar />
          <MainContent>
            <GamingBanner>
              <SiYoutubegaming size={37} color="red" />
              <GamingBannerTitle isDarkTheme={isDarkTheme}>
                Gaming
              </GamingBannerTitle>
            </GamingBanner>
            <GamingVideos />
          </MainContent>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Gaming