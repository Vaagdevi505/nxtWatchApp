import styled from 'styled-components'

export const MenuBarContainer = styled.div`
  display: flex;
  width: 100%;
  /* Use a prop to set the background color */
  background-color: ${props => (props.isDarkTheme ? '#141414' : '#f1f5f9')};
  padding: 0.75rem;
  position: fixed;
  bottom: 0;

  .menu-link {
    color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#555')};
  }
  
  .active-menu-link {
    background-color: ${props => (props.isDarkTheme ? '#424242' : '#e2e8f0')};
    color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
    font-weight: bold;
    svg {
       color: red;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1rem;
    margin-top: 50px;
    width: 225px;
    height: 95vh;
    bottom: auto;
    left: 0;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const MenuItems = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`
export const MenuItem = styled.li`
  width: 100%;
  
  .menu-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    gap: 1rem;
  }

  .active-menu-link {
    font-weight: bold;
    svg {
      color: red;
    }
  }
`
export const MenuItemText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    font-size: 0.9rem;
  }
`
export const ContactUs = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const ContactUsTitle = styled.p`
  font-size: 1.5rem;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#222')};
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
`
export const ContactUsLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`
export const ContactUsLink = styled.li`
  width: 27px;
  height: 27px;
  cursor: pointer;

  img {
    width: 100%;
  }
`
export const ContactUsText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#222')};
  font-size: 17px;
  margin: 10px 0;
  line-height: 1.3;
`