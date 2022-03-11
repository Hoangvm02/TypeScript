import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const myName = "Vũ Minh Hoàng";
const myAge = 20;
const myStatus = true;
const ShowInfo = (props) => {
  console.log(props);
  return <p>Thông tin user {props.name}</p>
}

ReactDOM.render(
  <App/>
 , document.querySelector('#root'))
