import React from 'react'
import Button from './Button'

const Body = ({onclick}) => {
  return(
    <div>
      <input type='text' placeholder='input text'></input>
      <Button onclick={onclick}></Button>
    </div>
  );
}
export default Body