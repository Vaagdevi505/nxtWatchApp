import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import Cookies from 'js-cookie'
import SavedVideosContext from '../../context/savedVideosContext'
import VideoContext from '../../context/VideoContext'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PlayVideo extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getCurrentVideo()
  }

  getCurrentVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const VideosApiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const rawResponse = await fetch(VideosApiUrl, options)
    if (rawResponse.ok) {
      const data = await rawResponse.json()
      let videoUrl = data.video_details.video_url
      videoUrl = videoUrl.replace('watch?v=', 'embed/')
      const currentVideo = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetails: currentVideo,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state

    return (
      <SavedVideosContext.Consumer>
        {savedVideosValue => (
          <VideoContext.Consumer>
            {videoContextValue => {
              const {addVideo, savedVideosList} = savedVideosValue
              const {
                likedVideos,
                dislikedVideos,
                addLikedVideo,
                addDislikedVideo,
              } = videoContextValue

              const isSaved = savedVideosList.some(
                video => video.id === videoDetails.id,
              )
              const isLiked = likedVideos.some(
                video => video.id === videoDetails.id,
              )
              const isDisliked = dislikedVideos.some(
                video => video.id === videoDetails.id,
              )

              const onSaveVideo = () => {
                addVideo(videoDetails)
              }

              const onClickLike = () => {
                if (isDisliked) {
                  addDislikedVideo(videoDetails)
                }
                addLikedVideo(videoDetails)
              }

              const onClickDislike = () => {
                if (isLiked) {
                  addLikedVideo(videoDetails)
                }
                addDislikedVideo(videoDetails)
              }

              const likeClassName = isLiked ? 'active-btn' : 'normal-btn'
              const dislikeClassName = isDisliked ? 'active-btn' : 'normal-btn'
              const saveClassName = isSaved ? 'active-btn' : 'normal-btn'

              return (
                <div className="video-item-container">
                  <div className="video-item-header">
                    <div className="video-play-container">
                      <iframe
                        src={videoDetails.videoUrl}
                        title={videoDetails.title}
                      />
                    </div>
                    <p className="video-item-title">{videoDetails.title}</p>
                    <div className="video-item-status">
                      <div className="video-item-stats">
                        <p>{videoDetails.viewCount} views </p>
                        <p>{videoDetails.publishedAt}</p>
                      </div>
                      <div className="video-item-fuction">
                        <div className="video-item-social">
                          <button
                            type="button"
                            className={likeClassName}
                            onClick={onClickLike}
                          >
                            <AiOutlineLike size={27} /> Like
                          </button>
                          <button
                            type="button"
                            className={dislikeClassName}
                            onClick={onClickDislike}
                          >
                            <AiOutlineDislike size={27} /> Dislike
                          </button>
                          <button
                            type="button"
                            className={saveClassName}
                            onClick={onSaveVideo}
                          >
                            {isSaved ? (
                              <MdPlaylistAddCheck size={27} />
                            ) : (
                              <MdPlaylistAdd size={27} />
                            )}
                            {isSaved ? 'Saved' : 'Save'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="video-item-footer">
                    <div className="video-item-channel">
                      <img
                        className="video-item-channel-img"
                        src={videoDetails.channel.profileImageUrl}
                        alt="channel profile"
                      />
                    </div>
                    <div className="video-item-channel-details">
                      <p className="video-item-channel-name">
                        {videoDetails.channel.name}
                      </p>
                      <p className="video-item-channel-subscriber">
                        {videoDetails.channel.subscriberCount} Subscribers
                      </p>
                      <p className="vide-item-channel-description">
                        {videoDetails.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            }}
          </VideoContext.Consumer>
        )}
      </SavedVideosContext.Consumer>
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
              onClick={this.getCurrentVideo}
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
    return <div className="video-content">{this.getApiStatus()}</div>
  }
}
export default PlayVideo
