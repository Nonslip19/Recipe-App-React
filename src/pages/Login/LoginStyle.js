import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-image: url('https://picsum.photos/1600/900');
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 600px;
  min-width: 600px;
  height: 600px;
  background: linear-gradient(0deg, rgba(134,216,195,0.90) 15%, rgba(253,235,45,0.9) 90%);
  border-radius: 10%;
  /* border: 2px solid #e1f1dd; */
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: #2F4F4F;
  font-family: 'Girassol', sans-serif;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  height: 50px;
  font-size: 2rem;
  width: 400px;
  border-radius: 5px;
  font-family: 'Girassol', sans-serif;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  color: white;
  margin: 1rem;
  text-align: center;
  /* text-indent: 20px; */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  border-radius: 5px;
  height: 50px;
  font-family: 'Girassol', sans-serif;
  background-color: darkblue;
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;