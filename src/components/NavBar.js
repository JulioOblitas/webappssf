import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function NavBar() {

const [estado, setEstado] = useState(false)

const [valorsel, setValorSel] = useState('json')




    


useEffect(()=>{
}, []);

    return (
        <>
        
        <nav className='navbarrapers'>
        <div className='itemnavbarrapers'>
             <ul>
                {/* <li>
                    <NavLink  to="/login" className="active btn btn-primary"> INICIAR SESION</NavLink>  
                </li>*/}
                

                <li>
                    <NavLink  to="/listarproductos" className="active btn btn-primary"> CONSULTAR ITEMS </NavLink>  
                </li>
               


            </ul>
            </div>
            
            {/*<div className='itemnavbarrapers'>
            <ul>
                <li>
                    <NavLink  to="/buscarvalores" className="active"> BUSCAR USUARIO  </NavLink>  
                </li>

                <li>
                    <NavLink  to="/crearusuario" className="active"> GENERAR USUARIO  </NavLink>  
                </li>

                <li>
                    <NavLink  to="/crearusuariomasivo" className="active"> GENERAR USUARIO CARGA MASIVA  </NavLink>  
                </li>
                <li>
                    <NavLink  to="/listaruser" className="active"> LISTAR USUARIO  </NavLink>  
                </li>
                <li>
                    <NavLink  to="/tipocambio" className="active"> TIPO DE CAMBIO </NavLink>  
                </li>
             </ul>
             </div>
            */}
            {/*<div className='itemnavbarrapers'>
                <h5>CONEXION A: </h5>
                <label> <input type="radio" name="programas"  value="json" checked = {valorsel === "json"} onChange={SeleccionarOpcion}  /> JSON</label> 
                    <br />
                <label> <input type="radio" name="programas"  value="mysqllocal" checked = {valorsel === "mysqllocal"} onChange={SeleccionarOpcion}/> MYSQL LOCAL</label>
                 <br />
                <label> <input type="radio" name="programas"  value="mysqlcloud" checked =  {valorsel === "mysqlcloud"} onChange={SeleccionarOpcion}/> MYSQL CLOUD</label>
                <br />
                <label> <input type="radio" name="programas"  value="sqlserverlocal" checked =  {valorsel === "sqlserverlocal"} onChange={SeleccionarOpcion}/> SQL SERVER LOCAL </label>
                <br />
                
                <label> <input type="checkbox"    onChange={SeleccionarCasilla}/> CARGA EXCEL</label>
            
                <button onClick={AvisoOpcion}>ELEGIR</button>
            </div>*/}

           
    </nav>

         {/*   <p>{valorsel}</p>   */ }
        </>
    )
}
