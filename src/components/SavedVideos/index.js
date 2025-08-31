import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import savedVideosContext from '../../context/savedVideosContext'

import './index.css'

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
            <h1 className="no-saved-videos-title">No saved videos found</h1>
            <p className="no-saved-videos-text">
              You can save your videos while watching them
            </p>
          </div>
        )

        const renderSavedVideosView = () => (
          <div className="saved-videos-container">
            <div className="saved-videos-banner">
              <MdPlaylistAdd size={37} color="red" />
              <h1 className="saved-videos-banner-title">Saved Videos</h1>
            </div>
            <ul className="saved-videos-list">
              {savedVideosList.map(video => (
                <Link to={`/videos/${video.id}`} className="video-link">
                  <li key={video.id} className="saved-video">
                    <div className="saved-video-card">
                      <div className="saved-video-thumbnail">
                        <img src={video.thumbnailUrl} alt="video thumbnail" />
                      </div>
                      <div className="saved-video-details">
                        <p className="saved-video-name">{video.title}</p>
                        <p className="saved-video-channel-name">
                          {video.channel.name}
                        </p>
                        <div className="saved-video-stats">
                          <p className="saved-video-views">
                            {video.viewCount} Views
                          </p>
                          <p className="saved-video-date">
                            {video.publishedAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
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
