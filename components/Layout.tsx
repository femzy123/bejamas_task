import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    margin: 1rem 5rem;
  }
`;

const Layout: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout
