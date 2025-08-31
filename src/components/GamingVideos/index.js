import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import {
  FailureView,
  FailureViewRetryButton,
  FailureViewText,
  FailureViewTitle,
  GameVideo,
  GameVideoCard,
  GameVideoDetails,
  GameVideoName,
  GameVideosList,
  GameVideoThumbnail,
  GameVideoViews,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    if (!jwtToken) {
      this.setState({apiStatus: apiStatusConstants.failure})
      return
    }
    const gameApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const rawResponse = await fetch(gameApiUrl, options)
    if (!rawResponse.ok) {
      this.setState({apiStatus: apiStatusConstants.failure})
    } else {
      const data = await rawResponse.json()
      const gameVideos = data.videos.map(game => ({
        id: game.id,
        title: game.title,
        thumbnailUrl: game.thumbnail_url,
        viewCount: game.view_count,
      }))
      this.setState({
        videos: gameVideos,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderSuccessView = () => {
    const {videos} = this.state
    if (videos.length === 0) {
      return (
        <FailureView>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no-videos"
          />
          <FailureViewTitle>No search results found</FailureViewTitle>
          <FailureViewText>
            Try different keywords or remove search filter
          </FailureViewText>
          <FailureViewRetryButton type="button">Retry</FailureViewRetryButton>
        </FailureView>
      )
    }
    return (
      <GameVideosList>
        {videos.map(video => (
          <GameVideo key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <GameVideoCard>
                <GameVideoThumbnail>
                  <img src={video.thumbnailUrl} alt="video thumbnail" />
                </GameVideoThumbnail>
                <GameVideoDetails>
                  <GameVideoName>{video.title}</GameVideoName>
                  <GameVideoViews>
                    {video.viewCount} Watching WorldWide
                  </GameVideoViews>
                </GameVideoDetails>
              </GameVideoCard>
            </Link>
          </GameVideo>
        ))}
      </GameVideosList>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageURL = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureView>
            <img src={failureImageURL} alt="failure view" />
            <FailureViewTitle>Oops! Something Went Wrong</FailureViewTitle>
            <FailureViewText>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewText>
            <FailureViewRetryButton type="button" onClick={this.getGames}>
              Retry
            </FailureViewRetryButton>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height={65} width={65} />
    </div>
  )

  getApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div className="game-content">{this.getApiStatus()}</div>
  }
}
export default GamingVideos
