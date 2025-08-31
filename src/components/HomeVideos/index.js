import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  componentDidUpdate(prevProps) {
    const {apiSearchQuery: prevSearchQuery} = prevProps
    const {apiSearchQuery} = this.props
    if (prevSearchQuery !== apiSearchQuery) {
      this.getHomeVideos()
    }
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {apiSearchQuery} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${apiSearchQuery}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const rawResponse = await fetch(homeVideosApiUrl, options)
    if (rawResponse.ok) {
      const data = await rawResponse.json()
      const homeVideos = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        videos: homeVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videos} = this.state
    if (videos.length === 0) {
      return (
        <div className="failure-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1 className="failure-view-title">No search results found</h1>
          <p className="failure-view-text">
            Try different key words or remove search filter
          </p>
          <button
            type="button"
            className="failure-view-retry-btn"
            onClick={this.getHomeVideos}
          >
            Retry
          </button>
        </div>
      )
    }
    return (
      <ul className="home-videos-list">
        {videos.map(video => (
          <li key={video.id} className="home-video">
            <Link to={`/videos/${video.id}`}>
              <div className="home-video-card">
                <div className="home-video-thumbnail">
                  <img src={video.thumbnailUrl} alt="video thumbnail" />
                </div>
                <div className="home-video-footer">
                  <img src={video.channel.profileImageUrl} alt="channel logo" />
                  <div className="home-video-details">
                    <p className="home-video-name">{video.title}</p>
                    <p className="home-video-channel-name">
                      {video.channel.name}
                    </p>
                    <div className="home-video-stats">
                      <p className="home-video-views">
                        {video.viewCount} Views
                      </p>
                      <p className="home-video-date">{video.publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
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
          <div className="failure-view">
            <img src={failureImageURL} alt="failure view" />
            <h1 className="failure-view-title">Oops! Something Went Wrong</h1>
            <p className="failure-view-text">
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button
              type="button"
              className="failure-view-retry-btn"
              onClick={this.getHomeVideos}
            >
              Retry
            </button>
          </div>
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
    return <div className="home-content">{this.getApiStatus()}</div>
  }
}
export default HomeVideos
