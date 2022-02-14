import React from 'react'
import { LoginContainer, StyledImg, Header, StyledForm, StyledInput, StyledButton, FormContainer } from './LoginStyle'
import mealSvg from "../../assets/meal.svg"
import myLogo from "../../assets/Logom.png"


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/'
  }
  return (
    <LoginContainer>
    <FormContainer>
      <StyledImg src={mealSvg}/>
      <Header>{"<MK> "}Recipe</Header>
      
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder='usename' required/>
        <StyledInput type="password" placeholder='password' required/>
        <StyledButton >Login</StyledButton>
      </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login;