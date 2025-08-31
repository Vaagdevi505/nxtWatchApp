import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  FailureView,
  FailureViewRetryButton,
  FailureViewText,
  FailureViewTitle,
  HomeVideoCard,
  HomeVideo,
  HomeVideoChannelName,
  HomeVideoDetails,
  HomeVideoFooter,
  HomeVideoName,
  HomeVideosList,
  HomeVideoStats,
  HomeVideoThumbnail,
} from './styledComponents'

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
        <FailureView>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureViewTitle>No search results found</FailureViewTitle>
          <FailureViewText>
            Try different key words or remove search filter
          </FailureViewText>
          <FailureViewRetryButton type="button" onClick={this.getHomeVideos}>
            Retry
          </FailureViewRetryButton>
        </FailureView>
      )
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeVideosList>
              {videos.map(video => (
                <li key={video.id}>
                  <HomeVideo>
                  <Link to={`/videos/${video.id}`}>
                    <HomeVideoCard>
                      <HomeVideoThumbnail>
                        <img src={video.thumbnailUrl} alt="video thumbnail" />
                      </HomeVideoThumbnail>
                      <HomeVideoFooter>
                        <img
                          src={video.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <HomeVideoDetails>
                          <HomeVideoName isDarkTheme={isDarkTheme}>
                            {video.title}
                          </HomeVideoName>
                          <HomeVideoChannelName isDarkTheme={isDarkTheme}>
                            {video.channel.name}
                          </HomeVideoChannelName>
                          <HomeVideoStats>
                            <p>{video.viewCount} Views</p>
                            <p>{video.publishedAt}</p>
                          </HomeVideoStats>
                        </HomeVideoDetails>
                      </HomeVideoFooter>
                    </HomeVideoCard>
                  </Link>
                  </HomeVideo>
                </li>
              ))}
            </HomeVideosList>
          )
        }}
      </ThemeContext.Consumer>
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
            <FailureViewRetryButton type="button" onClick={this.getHomeVideos}>
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
    return <div className="home-content">{this.getApiStatus()}</div>
  }
}
export default HomeVideos