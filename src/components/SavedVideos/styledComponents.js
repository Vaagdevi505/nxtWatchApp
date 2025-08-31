import styled from 'styled-components'

export const SavedVideosBanner = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const VideoLink = styled.a`
  text-decoration: none;
  color: #222;
`
export const SavedVideosBannerTitle = styled.h1`
  margin-left: 10px;
  color: #222;
  font-size: 25px;
  font-weight: 600;
`
export const SavedVideosContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`
export const SavedVideosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 0 10px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const SavedVideoCard = styled.div`
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`
export const SavedVideoThumbnail = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    object-position: center;
    display: block;
    border-radius: 3px;
  }
`
export const SavedVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  gap: 15px;
  margin: 15px 0 10px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    gap: 30px;
    margin: 15px 0 10px 20px;
  }
`
export const SavedVideoStats = styled.div`
  display: flex;
  gap: 20px;
  color: #777;
`
export const NoSavedVideosTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 0;
`
