import React, {Component} from 'react'

const VideoContext = React.createContext({
  likedVideos: [],
  dislikedVideos: [],
  addLikedVideo: () => {},
  addDislikedVideo: () => {},
})

export class VideoProvider extends Component {
  state = {
    likedVideos: [],
    dislikedVideos: [],
  }

  addLikedVideo = videoDetails => {
    const {likedVideos, dislikedVideos} = this.state
    const videoExists = likedVideos.some(video => video.id === videoDetails.id)
    if (videoExists) {
      this.setState({
        likedVideos: likedVideos.filter(video => video.id !== videoDetails.id),
      })
    } else {
      this.setState({
        likedVideos: [...likedVideos, videoDetails],
        dislikedVideos: dislikedVideos.filter(
          video => video.id !== videoDetails.id,
        ),
      })
    }
  }

  addDislikedVideo = videoDetails => {
    const {likedVideos, dislikedVideos} = this.state
    const videoExists = dislikedVideos.some(
      video => video.id === videoDetails.id,
    )
    if (videoExists) {
      this.setState({
        dislikedVideos: dislikedVideos.filter(
          video => video.id !== videoDetails.id,
        ),
      })
    } else {
      this.setState({
        dislikedVideos: [...dislikedVideos, videoDetails],
        likedVideos: likedVideos.filter(video => video.id !== videoDetails.id),
      })
    }
  }

  render() {
    const {likedVideos, dislikedVideos} = this.state
    const {children} = this.props
    return (
      <VideoContext.Provider
        value={{
          likedVideos,
          dislikedVideos,
          addLikedVideo: this.addLikedVideo,
          addDislikedVideo: this.addDislikedVideo,
        }}
      >
        {children}
      </VideoContext.Provider>
    )
  }
}

export default VideoContext
