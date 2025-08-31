import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import Cookies from 'js-cookie'
import SavedVideosContext from '../../context/savedVideosContext'
import VideoContext from '../../context/VideoContext'
import ThemeContext from '../../context/ThemeContext'
import {
  ActiveButton,
  FailureView,
  FailureViewRetryButton,
  FailureViewText,
  FailureViewTitle,
  NormalButton,
  VideoContent,
  VideoItemChannelDescription,
  VideoItemChannelDetails,
  VideoItemChannelImage,
  VideoItemChannelName,
  VideoItemChannelSubscriber,
  VideoItemContainer,
  VideoItemFooter,
  VideoItemSocial,
  VideoItemStats,
  VideoItemStatus,
  VideoItemTitle,
  VideoPlayContainer,
} from './styledComponents'

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
      <ThemeContext.Consumer>
        {themeValue => {
          const {isDarkTheme} = themeValue
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

                    const LikeButton = isLiked ? ActiveButton : NormalButton
                    const DislikeButton = isDisliked
                      ? ActiveButton
                      : NormalButton
                    const SaveButton = isSaved ? ActiveButton : NormalButton

                    return (
                      <VideoItemContainer>
                        <VideoPlayContainer>
                          <iframe
                            src={videoDetails.videoUrl}
                            title={videoDetails.title}
                          />
                        </VideoPlayContainer>
                        <VideoItemTitle isDarkTheme={isDarkTheme}>
                          {videoDetails.title}
                        </VideoItemTitle>
                        <VideoItemStatus>
                          <VideoItemStats isDarkTheme={isDarkTheme}>
                            <p>{videoDetails.viewCount} views </p>
                            <p>{videoDetails.publishedAt}</p>
                          </VideoItemStats>
                          <VideoItemSocial>
                            <LikeButton type="button" onClick={onClickLike}>
                              <AiOutlineLike size={27} /> Like
                            </LikeButton>
                            <DislikeButton
                              type="button"
                              onClick={onClickDislike}
                            >
                              <AiOutlineDislike size={27} /> Dislike
                            </DislikeButton>
                            <SaveButton type="button" onClick={onSaveVideo}>
                              {isSaved ? (
                                <MdPlaylistAddCheck size={27} />
                              ) : (
                                <MdPlaylistAdd size={27} />
                              )}
                              {isSaved ? 'Saved' : 'Save'}
                            </SaveButton>
                          </VideoItemSocial>
                        </VideoItemStatus>
                        <hr />
                        <VideoItemFooter>
                          <VideoItemChannelImage
                            src={videoDetails.channel.profileImageUrl}
                            alt="channel profile"
                          />
                          <VideoItemChannelDetails>
                            <VideoItemChannelName isDarkTheme={isDarkTheme}>
                              {videoDetails.channel.name}
                            </VideoItemChannelName>
                            <VideoItemChannelSubscriber
                              isDarkTheme={isDarkTheme}
                            >
                              {videoDetails.channel.subscriberCount} Subscribers
                            </VideoItemChannelSubscriber>
                            <VideoItemChannelDescription
                              isDarkTheme={isDarkTheme}
                            >
                              {videoDetails.description}
                            </VideoItemChannelDescription>
                          </VideoItemChannelDetails>
                        </VideoItemFooter>
                      </VideoItemContainer>
                    )
                  }}
                </VideoContext.Consumer>
              )}
            </SavedVideosContext.Consumer>
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
              onClick={this.getCurrentVideo}
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
    return <VideoContent>{this.getApiStatus()}</VideoContent>
  }
}
export default PlayVideo