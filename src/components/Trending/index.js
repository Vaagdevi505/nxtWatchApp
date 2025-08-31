import {HiFire} from 'react-icons/hi'
import TrendingVideos from '../TrendingVideos'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'

import {
  MainContent,
  TrendingBanner,
  TrendingBannerTitle,
} from './styledComponents'

const Trending = () => (
  <>
    <NavBar />
    <MenuBar />
    <MainContent>
      <TrendingBanner>
        <HiFire size={37} color="red" />
        <TrendingBannerTitle>Trending</TrendingBannerTitle>
      </TrendingBanner>
      <TrendingVideos />
    </MainContent>
  </>
)
export default Trending
