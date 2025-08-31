import styled from 'styled-components'

export const VideoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 50px;
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 3px;
`
export const VideoPlayContainer = styled.div`
  iframe {
    width: 100%;
    height: 60vh;
    border: none;
  }
  @media (max-width: 768px) {
    iframe {
      height: 40vh;
    }
  }
`
export const VideoItemTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
export const VideoItemStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`
export const VideoItemStats = styled.div`
  display: flex;
  gap: 15px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#555')};
  }
`
export const VideoItemSocial = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    gap: 10px;
    font-size: 13px;
  }
`
export const VideoItemFooter = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoItemChannelImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`
export const VideoItemChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const VideoItemChannelName = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`
export const VideoItemChannelSubscriber = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : 'gray')};
`
export const VideoItemChannelDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
`
export const SocialButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;

  &:active {
    color: #00306e;
  }
`
export const ActiveButton = styled.button`
  color: #2563eb;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`
export const NormalButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`
export const FailureView = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    width: 80%;
    max-width: 300px;
    align-self: center;
  }

  @media (max-width: 768px) {
    img {
      width: 60%;
      max-width: 250px;
    }
  }
`
export const FailureViewTitle = styled.h1`
  font-size: 1.2rem;
  margin: 10px 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const FailureViewText = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`
export const FailureViewRetryButton = styled.button`
  background: transparent;
  padding: 10px 25px;
  border: 1px solid #00306e;
  border-radius: 3px;
  font-size: 14px;
  color: #efefef;
  letter-spacing: 1px;
  background-color: #00306e;
  cursor: pointer;
  display: inline-block;
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 12px;
  }
`