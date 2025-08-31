import {SiYoutubegaming} from 'react-icons/si'
import GamingVideos from '../GamingVideos'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'

import './index.css'

const Gaming = () => (
  <>
    <NavBar />
    <MenuBar />
    <div className="main-content">
      <div className="gaming-banner">
        <SiYoutubegaming size={37} color="red" />
        <span className="gaming-banner-title">Gaming</span>
      </div>
      <GamingVideos />
    </div>
  </>
)
export default Gaming
