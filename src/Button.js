import React from 'react'
import PropTypes from 'prop-types'


const Button =({onClick}) => {
  
  return(
     <button onClick={onClick}>Add...</button>
  );
}

Button.propTypes = {
  onClick:PropTypes.func
}
export default Button