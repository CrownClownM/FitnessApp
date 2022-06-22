import React from 'react'
import ReactDOM from 'react-dom' //Nos proporciona diferentes metodos especificos para controlar el dom
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'


//Sexta clase

/* 
const user = { //Creacion de un objeto
  firstName: 'Steven',
  lastName: 'Medina',
  avatar: 'https://img.wattpad.com/cover/272460065-352-k871067.jpg'
}

function getName(user){ //Definiendo la funcion para obtener los atributos de name y last name
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
      return <h1>Hello {getName(user)} </h1> //Entre llaves se hace el llamado a variables
  }
  return <h1>Hello Stranger</h1>
}

const name = 'Medina'

//const element = <div>{getGreeting(user)}</div> //Llamado a la funcion para mostrar el nombre y apellido si se envia el user
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
) 
const container = document.getElementById('root') //Obtenemos el contenedor en el que agregaremos el elemento anterior

ReactDOM.render(element, container)
*/

//Octava clase

const container = document.getElementById('root') //Obtenemos el contenedor con el que agregaremos los elementos a nuestra pagina
ReactDOM.render(<App/>, container) //Se entrega la pagina exercise al container para realizar el render en la raiz
