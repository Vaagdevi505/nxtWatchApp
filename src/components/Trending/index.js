import {HiFire} from 'react-icons/hi'
import TrendingVideos from '../TrendingVideos'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'

import {
  MainContent,
  TrendingBanner,
  TrendingBannerTitle,
} from './styledComponents'

const Trending = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <NavBar />
          <MenuBar />
          <MainContent>
            <TrendingBanner>
              <HiFire size={37} color="red" />
              <TrendingBannerTitle isDarkTheme={isDarkTheme}>
                Trending
              </TrendingBannerTitle>
            </TrendingBanner>
            <TrendingVideos />
          </MainContent>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Trending