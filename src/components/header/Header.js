import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyle'

const Header = () => {
  return (
    <HeaderContainer>
        <MainHeader>
            Food <App></App>
        </MainHeader>
        <Form/>
    </HeaderContainer>
  )
}

export default Header