import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyle'
import myLogo from "../../assets/Logom.png"

const Header = ({setQuery, query, getData, mealTypes, setMeal, meal}) => {
  return (
    <HeaderContainer>
        <MainHeader>
        <img src={myLogo} alt="my logo"/>
        </MainHeader>
        <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
        />
    </HeaderContainer>
  )
}

export default Header