import PlayVideo from '../PlayVideo'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'
import './index.css'

const Video = props => (
  <>
    <NavBar />
    <MenuBar />
    <div className="main-content">
      <PlayVideo {...props} />
    </div>
  </>
)

export default Video
