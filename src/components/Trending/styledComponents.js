import styled from 'styled-components'

export const MainContent = styled.div`
  padding: 1rem 0.5em;
  overflow-y: hidden;

  @media screen and (min-width: 768px) {
    margin-left: 225px;
  }
`
export const TrendingBanner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 20px;

  @media screen and (max-width: 540px) {
    margin-bottom: 20px;
    margin-left: 10px;
  }
`
export const TrendingBannerTitle = styled.span`
  margin-left: 10px;
  color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 25px;
  font-weight: 600;
`
