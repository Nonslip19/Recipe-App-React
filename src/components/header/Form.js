import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle'

const Form = () => {
  return (
    <div>
        <FormContainer>
            <FoodInput type="text"
            placeholder="Search"/>
            <Button> Search </Button>
            <Select></Select>
        </FormContainer>
    </div>
  )
}

export default Form;