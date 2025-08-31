import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.75rem 2rem;
  width: 100%;
  /* Use a prop to set the background color */
  background-color: ${props => (props.isDarkTheme ? '#141414' : '#f1f5f9')};
  position: fixed;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const NavLogoContainer = styled.div`
  width: 110px;

  @media screen and (max-width: 768px) {
    width: 110px;
  }
`
export const NavbarLogo = styled.img`
  width: 100%;
`
export const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  outline: none;
  list-style: none;
`
export const NavItem = styled.li`
  button:not(.logout-btn) {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .logout-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
    border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
    outline: none;
    background: transparent;
    border-radius: 5px;
    transition: 0.3s;
    margin-left: 10px;

    &:hover {
      background-color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
      color: ${props => (props.isDarkTheme ? '#00306e' : '#ffffff')};
    }
  }

  @media screen and (max-width: 768px) {
    .logout-btn {
      padding: none;
      border: none;
    }

    .logout-btn:hover {
      color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
      background: none;
    }
  }
`
export const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
`
export const LogoutText = styled.span`
  padding: 7px 14px;
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIcon = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
  }
`
export const ThemeToggle = styled.button`
  cursor: pointer;
`
export const CustomPopup = styled.div`
  padding: 2rem;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#cbd5e1')};
  width: 275px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 3rem;
    width: 350px;
  }
`
export const PopupText = styled.p`
  margin-bottom: 1rem;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#000')};
`
export const PopupButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PopupButton = styled.button`
  padding: 7px 14px;
  border-radius: 5px;
  font-weight: 600;
  border: 1px solid;
  cursor: pointer;
`
export const CancelButton = styled(PopupButton)`
  background: transparent;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#444')};
  border-color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#444')};
`
export const ConfirmButton = styled(PopupButton)`
  background: #3b82f6;
  color: #fff;
  border-color: #3b82f6;
`