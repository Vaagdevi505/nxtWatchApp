import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import savedVideosContext from '../../context/savedVideosContext'
import ThemeContext from '../../context/ThemeContext'

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
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosText,
  SavedVideoTitle,
  SavedVideoChannelName,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {themeValue => {
      const {isDarkTheme} = themeValue
      return (
        <savedVideosContext.Consumer>
          {savedValue => {
            const {savedVideosList} = savedValue

            const renderNoSavedVideosView = () => (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosTitle isDarkTheme={isDarkTheme}>
                  No saved videos found
                </NoSavedVideosTitle>
                <NoSavedVideosText isDarkTheme={isDarkTheme}>
                  You can save your videos while watching them
                </NoSavedVideosText>
              </NoSavedVideosView>
            )

            const renderSavedVideosView = () => (
              <SavedVideosContainer data-testid="savedVideos">
                <SavedVideosBanner>
                  <MdPlaylistAdd size={37} color="red" />
                  <SavedVideosBannerTitle isDarkTheme={isDarkTheme}>
                    Saved Videos
                  </SavedVideosBannerTitle>
                </SavedVideosBanner>
                <SavedVideosList>
                  {savedVideosList.map(video => (
                    <Link to={`/videos/${video.id}`} key={video.id}>
                      <li>
                        <SavedVideoCard>
                          <SavedVideoThumbnail>
                            <img
                              src={video.thumbnailUrl}
                              alt="video thumbnail"
                            />
                          </SavedVideoThumbnail>
                          <SavedVideoDetails>
                            <SavedVideoTitle isDarkTheme={isDarkTheme}>
                              {video.title}
                            </SavedVideoTitle>
                            <SavedVideoChannelName isDarkTheme={isDarkTheme}>
                              {video.channel.name}
                            </SavedVideoChannelName>
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
              <>
                <NavBar />
                <MenuBar />
                <div className="main-content">
                  {savedVideosList.length === 0
                    ? renderNoSavedVideosView()
                    : renderSavedVideosView()}
                </div>
              </>
            )
          }}
        </savedVideosContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos