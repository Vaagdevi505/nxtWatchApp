import {SiYoutubegaming} from 'react-icons/si'
import GamingVideos from '../GamingVideos'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'

import {GamingBanner, GamingBannerTitle, MainContent} from './styledComponents'

const Gaming = () => (
  <>
    <NavBar />
    <MenuBar />
    <MainContent>
      <GamingBanner>
        <SiYoutubegaming size={37} color="red" />
        <GamingBannerTitle>Gaming</GamingBannerTitle>
      </GamingBanner>
      <GamingVideos />
    </MainContent>
  </>
)
export default Gaming
