import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import {accederUsuarioEC} from "../services/usuarioService"
import Swal from "sweetalert2";




export const Login = () => {
  const   logo  = "/assets/logo7.png"
  const  logoslider  = "/assets/slidefondo.jpg"


  const [value,SetValue] = useState([])
  
  const navigate = useNavigate()
  
  
  const actualizarInput = (e) => {
    SetValue ({...value,[e.target.name]:e.target.value})  //cogiendo el estado de lvalue y spred operatr      
  };  

  const manejarSubmit = async(e) =>{
    e.preventDefault();

    try {
      const datoslogin = await accederUsuarioEC(value)
      if (datoslogin.message === "BIENVENIDO") {

        
        const valortoken = datoslogin.token
        localStorage.setItem('token', valortoken)
        await Swal.fire({
        icon:'success',
        title:'ACCESO',
        text: `Usuario Logueado con Token  ${valortoken}`,
        showConfirmButton:false,
        timer: 2000,

        })  
        navigate('/')
        
    
      }else{
        if (datoslogin.message === "PASSWORD INCORRECTO"){
            await Swal.fire({
                icon: 'error',
                title:'ACCESO',
                text: 'Usuario su Clave es incorrecto',
                showConfirmButton:false,
                timer: 2000,
            })
        }else{
            await Swal.fire({
                icon: 'error',
                title:'ACCESO',
                text: 'Usuario su Email es incorrecto',
                showConfirmButton:false,
                timer: 2000,
            })

        }
    }
    
    } catch (error) {
        console.log(error);
    }

};


      
  return (
  
  <div className='login'>
      <div className='loginclave'>
        <h1>SISTEMA WEB == MINIMARKET   </h1>
      </div>
     
    <img className='imglogologin'  src= {logo} alt="" />
        
    
     <div className='loginclave'>
      <form onSubmit = {(e) => {manejarSubmit(e)}}>
   
      <label htmlFor ="correo">Correo </label>
      <br />
      <input  id = "correo" className='txtlogincorreo' type="email" placeholder="jmoqpe@outlook.com" required maxLength="50" name='correo'   value = {value.correo} onChange={(e) => actualizarInput(e)} />                        
      <br />
      <label htmlFor ="password" >Password</label>
      <br />
      <input id = "password"  className='txtloginpassword' type="password" placeholder="Nitro####?" required maxLength="10" name='password'   value = {value.password} autoComplete="off" onChange={(e) => actualizarInput(e)} />                        
      <br />
      <br />
       <button className='btn btn-primary btnacceder' type = "submit" >ACCEDER</button>
       </form>
    
    </div>
    <img className='imgfondo'  src= {logoslider} alt="" />
    </div>
    
  )
}

