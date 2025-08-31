import {IoMdClose} from 'react-icons/io'
import {
  BannerButton,
  BannerCloseButton,
  BannerContainer,
  BannerContent,
  BannerFooter,
  BannerHeader,
  BannerImage,
  BannerText,
} from './styledComponents'

const Banner = ({visible, handleCloseBanner}) => {
  if (!visible) {
    return null
  }
  return (
    <BannerContainer data-testid="banner">
      <BannerHeader>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseButton
          type="button"
          onClick={handleCloseBanner}
          data-testid="close"
        >
          <IoMdClose size={25} />
        </BannerCloseButton>
      </BannerHeader>
      <BannerContent>
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      </BannerContent>
      <BannerFooter>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerFooter>
    </BannerContainer>
  )
}

export default Banner
