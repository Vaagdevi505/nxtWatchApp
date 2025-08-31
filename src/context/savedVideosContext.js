import React, {Component} from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addVideo: () => {},
})

export class SavedVideosProvider extends Component {
  state = {savedVideosList: []}

  addVideo = videoDetails => {
    const {savedVideosList} = this.state
    const videoExists = savedVideosList.some(
      video => video.id === videoDetails.id,
    )
    if (videoExists) {
      this.setState({
        savedVideosList: savedVideosList.filter(
          video => video.id !== videoDetails.id,
        ),
      })
    } else {
      this.setState({
        savedVideosList: [...savedVideosList, videoDetails],
      })
    }
  }

  render() {
    const {savedVideosList} = this.state
    const {children} = this.props
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          addVideo: this.addVideo,
        }}
      >
        {children}
      </SavedVideosContext.Provider>
    )
  }
}

export default SavedVideosContext
