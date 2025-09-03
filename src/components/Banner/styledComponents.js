import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  margin-top: 50px;
  padding: 1rem;
`
export const BannerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BannerImage = styled.img`
  width: 130px;
  @media screen and (max-width: 480px) {
    width: 110px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`
export const BannerContent = styled.div`
  text-wrap: wrap;
  padding-right: 1rem;
  line-height: 1.2;
`
export const BannerText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #111;
`
export const BannerFooter = styled.div`
  margin-bottom: 1rem;
`
export const BannerButton = styled.button`
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #222;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`
