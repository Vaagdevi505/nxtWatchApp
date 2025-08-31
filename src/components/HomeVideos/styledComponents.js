import styled from 'styled-components'

export const HomeVideoLink = styled.a`
  text-decoration: none;
`
export const HomeVideosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 0 10px;
  list-style: none;
`
export const HomeVideoCard = styled.div`
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const HomeVideoThumbnail = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`
export const HomeVideoFooter = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
  align-items: flex-start;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`
export const HomeVideoDetails = styled.div`
  flex: 1;
`
export const HomeVideoName = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
  color: #333;
`
export const HomeVideoChannelName = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`
export const HomeVideoStats = styled.div`
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: #666;
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

  @media screen and (max-width: 768px) {
    img {
      width: 60%;
      max-width: 250px;
    }
  }
`
export const FailureViewTitle = styled.h1`
  font-size: 1.2rem;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`
export const FailureViewText = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    padding: 8px 20px;
    font-size: 12px;
  }
`
