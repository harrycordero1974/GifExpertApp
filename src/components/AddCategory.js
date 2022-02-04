import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue,setInputValue] = useState('')
    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0)    {
        setCategories(catg => [inputValue,...catg] );
        setInputValue('');
        }   
     }
  return (
  <form onSubmit={handelSubmit}>

          <h2>Add Category</h2>

          <input
                 type="text"
                 value = {inputValue} 
                 onChange={handleInputChange}
           />
           {/* <h3> {inputValue} </h3> */}

  </form>
)};

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired

}
