import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import Banner from '../Banner'
import HomeVideos from '../HomeVideos'

import './index.css'

class Home extends Component {
  state = {
    bannerVisible: true,
    searchInput: '',
    apiSearchQuery: '',
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = () => {
    const {searchInput} = this.state
    this.setState({apiSearchQuery: searchInput})
  }

  handleSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  handleCloseBanner = () => {
    this.setState({bannerVisible: false})
  }

  render() {
    const {bannerVisible, searchInput, apiSearchQuery} = this.state

    return (
      <>
        <NavBar />
        <MenuBar />
        <div data-testid="home" className="main-content">
          <Banner
            visible={bannerVisible}
            handleCloseBanner={this.handleCloseBanner}
          />
          <section className={`${!bannerVisible ? 'no-banner' : ''}`}>
            <div className="search-bar-container">
              <input
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.handleSearchInput}
                placeholder="Search"
              />
              <button
                data-testid="searchButton"
                type="button"
                className="search-icon"
                onClick={this.fetchVideos}
              >
                <IoIosSearch size={20} />
              </button>
            </div>
            <HomeVideos apiSearchQuery={apiSearchQuery} />
          </section>
        </div>
      </>
    )
  }
}

export default Home
