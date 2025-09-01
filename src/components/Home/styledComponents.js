import styled from 'styled-components'

export const MainContent = styled.div`
  padding: 1rem 0.5em;
  overflow-y: hidden;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    margin-left: 225px;
  }
`

export const NoBanner = styled.section`
  margin-top: 70px;
`

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 1.5rem 0;
  border: 1px solid rgb(144, 144, 144);
  justify-self: center;
  border-radius: 3px;
  width: 90%;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 40%;
    justify-self: flex-start;
  }
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: rgb(35, 31, 32);
`

export const SearchIcon = styled.button`
  background-color: rgb(144, 144, 144);
  width: 70px;
  cursor: pointer;
  padding: 5px;
  border: none;
`
