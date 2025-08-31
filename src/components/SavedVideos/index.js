import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import savedVideosContext from '../../context/savedVideosContext'

import {
  NoSavedVideosTitle,
  SavedVideoCard,
  SavedVideoDetails,
  SavedVideosBanner,
  SavedVideosBannerTitle,
  SavedVideosContainer,
  SavedVideosList,
  SavedVideoStats,
  SavedVideoThumbnail,
} from './styledComponents'

const SavedVideos = ({isDarkTheme, toggleTheme}) => {
  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme'

  return (
    <savedVideosContext.Consumer>
      {value => {
        const {savedVideosList} = value

        const renderNoSavedVideosView = () => (
          <div className={`not-found-view ${themeClass}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
              className="not-found-image"
            />
            <NoSavedVideosTitle>No saved videos found</NoSavedVideosTitle>
            <p>You can save your videos while watching them</p>
          </div>
        )

        const renderSavedVideosView = () => (
          <SavedVideosContainer>
            <SavedVideosBanner>
              <MdPlaylistAdd size={37} color="red" />
              <SavedVideosBannerTitle>Saved Videos</SavedVideosBannerTitle>
            </SavedVideosBanner>
            <SavedVideosList>
              {savedVideosList.map(video => (
                <Link to={`/videos/${video.id}`} className="video-link">
                  <li key={video.id}>
                    <SavedVideoCard>
                      <SavedVideoThumbnail>
                        <img src={video.thumbnailUrl} alt="video thumbnail" />
                      </SavedVideoThumbnail>
                      <SavedVideoDetails>
                        <p>{video.title}</p>
                        <p>{video.channel.name}</p>
                        <SavedVideoStats>
                          <p>{video.viewCount} Views</p>
                          <p>{video.publishedAt}</p>
                        </SavedVideoStats>
                      </SavedVideoDetails>
                    </SavedVideoCard>
                  </li>
                </Link>
              ))}
            </SavedVideosList>
          </SavedVideosContainer>
        )

        return (
          <div className={themeClass}>
            <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <MenuBar />
            <div className="main-content">
              {savedVideosList.length === 0
                ? renderNoSavedVideosView()
                : renderSavedVideosView()}
            </div>
          </div>
        )
      }}
    </savedVideosContext.Consumer>
  )
}

export default SavedVideos
