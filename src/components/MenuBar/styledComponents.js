import styled from 'styled-components'

export const MenuBarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1f5f9;
  padding: 0.75rem;
  position: fixed;
  bottom: 0;

  @media screen and (min-width: 768px) {
    padding: 1rem;
    margin: 50px 0;
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
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
  }
`
export const MenuItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .active-menu-link {
    background-color: #e2e8f0;
    svg {
      color: red;
      font-weight: 600;
    }
  }
`
export const MenuLink = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 7px;
  color: #555;

  svg {
    color: #555;
    transition: color 0.3s ease;
  }
`
export const MenuItemText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    text-align: center;
    padding-left: 1rem;
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
  color: #222;
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
  color: #222;
  font-size: 17px;
  margin: 10px 0;
  line-height: 1.3;
`
