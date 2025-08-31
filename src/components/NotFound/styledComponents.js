import styled from 'styled-components'

export const NotFoundView = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`
export const NotFoundImage = styled.img`
  margin-top: 70px;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 400px !important;
  }
`
export const NotFoundTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #111;
`
export const NotFoundText = styled.p`
  color: #444;
  font-size: 15px;
`
