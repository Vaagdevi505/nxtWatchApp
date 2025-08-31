import PlayVideo from '../PlayVideo'
import MenuBar from '../MenuBar'
import NavBar from '../NavBar'
import {MainContent} from './styledComponents'

const Video = props => (
  <>
    <NavBar />
    <MenuBar />
    <MainContent>
      <PlayVideo {...props} />
    </MainContent>
  </>
)

export default Video
