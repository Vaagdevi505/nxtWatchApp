import {HiFire} from 'react-icons/hi'
import TrendingVideos from '../TrendingVideos'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'

import './index.css'

const Trending = () => (
  <>
    <NavBar />
    <MenuBar />
    <div className="main-content">
      <div className="trending-banner">
        <HiFire size={37} color="red" />
        <span className="trending-banner-title">Trending</span>
      </div>
      <TrendingVideos />
    </div>
  </>
)
export default Trending
