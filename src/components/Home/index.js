import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import NavBar from '../NavBar'
import MenuBar from '../MenuBar'
import Banner from '../Banner'
import HomeVideos from '../HomeVideos'
import ThemeContext from '../../context/ThemeContext'

import {
  MainContent,
  NoBanner,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
} from './styledComponents'

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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <NavBar />
              <MenuBar />
              <MainContent data-testid="home" isDarkTheme={isDarkTheme}>
                <Banner
                  visible={bannerVisible}
                  handleCloseBanner={this.handleCloseBanner}
                />
                <NoBanner className={`${!bannerVisible ? 'no-banner' : ''}`}>
                  <SearchBarContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.handleSearchInput}
                      placeholder="Search"
                    />
                    <SearchIcon
                      data-testid="searchButton"
                      type="button"
                      onClick={this.fetchVideos}
                    >
                      <IoIosSearch size={20} />
                    </SearchIcon>
                  </SearchBarContainer>
                  <HomeVideos apiSearchQuery={apiSearchQuery} />
                </NoBanner>
              </MainContent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
