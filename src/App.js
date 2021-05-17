import React from "react";
import "./style.css";
import Header from './Header'
import Body from './Body'

export default function App() {
  const onClick=()=>{
    console.log('hereffgg')
  }
  return (
    <div>
      <Header text='My new App'></Header>
      <Body onClick='{onclick}'></Body>
    </div>
  );
}
