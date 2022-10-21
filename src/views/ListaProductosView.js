import {  useState, useEffect  } from "react";
import { obtenerProductos , eliminarProducto } from "../services/productoServices"
import Cargando from "../components/Cargando";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


export default function ListaProductosView() {
    const [productos,SetProductos] = useState([])
    
    const [loading,SetLoading] = useState(false) 
 

    const getDatos = async() =>{
        
        try {
            SetLoading(true)
            const  productosobtenidos = await obtenerProductos();            
            
            SetProductos(productosobtenidos);
            
          //console.log(JSON.stringify(tipoproductosobtenidos))
            
            SetLoading(false);    
        } catch (error) {
            console.log(error);
        }

        
    };
   
    const verificarEliminar = async(id) => {
        const rpta  = await Swal.fire({
        icon : 'success',
        title : 'Eliminar Producto  con ID '+ id,
        text : 'Esta accion es irreversible',
        showConfirmButton: true,
        showDenyButton:true,
        confirmButtonText:"Si, Eliminar",
        denyButtonText:"No, cancelar",
    });

        if (rpta.isConfirmed){
            try {
               const rpta =   await eliminarProducto(id);                 
                if (rpta.data.imagen == null) {
                    await Swal.fire({
                        icon : "success",
                        title : "Producto ",
                        text :  "Accion de Eliminar Producto"
                        })
                }
                else{
                    await Swal.fire({
                    icon : "success",
                    title : "Producto ",
                    text :  "La imagen del Producto se ha eliminado del S3 AMAZON"
                    })
                }
                getDatos();
                
            } catch (error) {
                    console.log(error);
            }
        }

};



    useEffect(() =>{        
        getDatos();
        
    },[]);

    
    return (
        <>
            {loading ? (
                <Cargando />
            ) : (
                
                <div className = "contenedor"> 
            
                <div className="principalcategorias">
                
                <h1 className = "mb-3">LISTADO DE PRODUCTOS</h1>
                                    
                 <table className = "table"> 

                 <thead>
                     <tr>
                         <th>ID</th>                         
                         {/*<th>TIPO PRODUCTO</th>*/}                         
                         <th>PRODUCTO</th>                         
                         <th>STOCK</th>                         
                         {/*<th>UNID MED</th>*/}                                                  
                         <th>MODIFICAR</th>                                                  
                         <th>ELIMINAR</th>                                                  
                     </tr>

                 </thead>
                 <tbody>
                 {
                         productos.map((regtipoprod,i) =>(
                             <tr key={i}>
                                 <td>{regtipoprod.n_id} </td>
                                 <td>{regtipoprod.c_despro} </td>
                                {/* <td>{regtipoprod.n_stkact.toFixed(2)} </td>*/}
                                 {/*<td>{regtipoprod.precio.toFixed(2)} </td>
                                 <td>{regtipoprod.uniMed.descripcion} </td>*/}
                                 <td>
                                 <Link  className= "btn btn-info me-2" to ={`/editarproducto/${regtipoprod.id}`}>  <i className="fas fa-edit"></i> </Link>
                                 </td>                                                    
                                 <td>
                                    <button className = "btn btn-danger" onClick={() => {verificarEliminar(regtipoprod.id)}}>  <i className="fas fa-eraser"></i>  </button>
                                </td>                                                    
                             </tr>                         
                         ))                         
                     }

                            
                           
                 </tbody>
                 </table>
                 
                 </div>

                 </div>
            )}
            </>
    
    );
}
