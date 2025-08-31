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
  TrendingVideo,
  TrendingVideoCard,
  TrendingVideoChannelName,
  TrendingVideoDetails,
  TrendingVideoFooter,
  TrendingVideoName,
  TrendingVideosList,
  TrendingVideoStats,
  TrendingVideoThumbnail,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const rawResponse = await fetch(trendingVideosApiUrl, options)
    if (rawResponse.ok) {
      const data = await rawResponse.json()
      const trendingVideos = data.videos.map(eachVideo => ({
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
        videos: trendingVideos,
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
            Try different keywords or remove search filter
          </FailureViewText>
          <FailureViewRetryButton type="button">Retry</FailureViewRetryButton>
        </FailureView>
      )
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingVideosList>
              {videos.map(video => (
                <TrendingVideo key={video.id}>
                  <Link to={`/videos/${video.id}`}>
                    <TrendingVideoCard>
                      <TrendingVideoThumbnail>
                        <img src={video.thumbnailUrl} alt="video thumbnail" />
                      </TrendingVideoThumbnail>
                      <TrendingVideoFooter>
                        <img
                          src={video.channel.profileImageUrl}
                          alt="channel-profile"
                        />
                        <TrendingVideoDetails>
                          <TrendingVideoName isDarkTheme={isDarkTheme}>
                            {video.title}
                          </TrendingVideoName>
                          <TrendingVideoChannelName isDarkTheme={isDarkTheme}>
                            {video.channel.name}
                          </TrendingVideoChannelName>
                          <TrendingVideoStats>
                            <p>{video.viewCount} Views</p>
                            <p>{video.publishedAt}</p>
                          </TrendingVideoStats>
                        </TrendingVideoDetails>
                      </TrendingVideoFooter>
                    </TrendingVideoCard>
                  </Link>
                </TrendingVideo>
              ))}
            </TrendingVideosList>
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
            <FailureViewRetryButton
              type="button"
              onClick={this.getTrendingVideos}
            >
              Retry
            </FailureViewRetryButton>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height={60} width={60} />
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
    return <div className="trending-content">{this.getApiStatus()}</div>
  }
}
export default TrendingVideos