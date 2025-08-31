// src/components/Login/styledComponents.js

import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  padding: 2rem 1rem;
  border-radius: 8px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 4px 16px 0px #bfbfbf'};
`
export const LoginImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
export const LoginImage = styled.img`
  width: 50%;
`
export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-bottom: 1.2rem;
`
export const LoginFormLabel = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#5a697d')};
`
export const LoginInput = styled.input`
  border-radius: 5px;
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#e5e5e5')};
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#000000')};
  padding: 10px;
  outline: none;

  &:focus {
    outline: none;
  }
`
export const LoginShowPasswordContainer = styled.div`
  display: flex;
  max-width: 150px;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  input {
    cursor: pointer;
    margin-right: 5px;
  }

  label {
    font-size: 13px;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#5a697d')};
  }
`
export const LoginButtonContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 1rem;
`
export const LoginButton = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  background-color: #3b82f6;
  padding: 0.75rem 3rem;
  color: #ffffff;
  border: none;
  outline: none;

  &:hover {
    background-color: #467fdc;
  }
`
export const LoginText = styled.p`
  text-align: center;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#231f20')};
`
export const LoginErrorMessage = styled.p`
  text-align: center;
  color: #ff0b37;
  font-size: 15px;
  margin: 10px 0;
`