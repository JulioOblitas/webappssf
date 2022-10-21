import axios from "axios"

const URL  = `${process.env.REACT_APP_BACK_URL}`
//const URL  = `${process.env.REACT_APP_NUBE}`

    //USUARIO ECOMERCE

    const crearUsuarioEC  = async (nuevoUsuario) =>{
    console.log(nuevoUsuario)
        try {
       
           const headers  ={
               "Content-Type" : "application/json"
           }
           const  {data} = await axios.post(`${URL}/usuario`,nuevoUsuario,{headers});
             return data 
        } catch (error) {
            throw error;
        }
       }
       
       const accederUsuarioEC = async (nuevousuario) =>{
           
           try {
               
               const headers ={
                   "Content-Type": "application/json"        
               }
               const {data} = await axios.post(`${URL}/usuarioacceder`,nuevousuario,{headers})
               
               console.log(data)
               return data;
       
           } catch (error) {
               throw error;
           }
       }
       
       
    const obtenerUsuariosEC = async () => {
    
        try {

            const  {data} = await axios.get(`${URL}/usuario`);
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    const eliminarUsuarioEC  = async (id) => {
        try {                
             await axios.delete(`${URL}/usuario/${id}`);
                return "Eliminar Usuario";
        } catch (error) {
            throw error;
        }
    }

    const editarUsuarioPorIdEC  = async (id, objUsuario )  => {
    
        try {
            const headers = {
                "Content-Type": "application/json"        
            }
            
             await axios.put(`${URL}/usuario/${id}`, objUsuario, { headers })
                return;
        } catch (error) {
            throw error
        }
    }
        
    
        const obtenerUsuarioPorIdEC  = async (id) => {
            
            try {
                
                const { data} = await axios.get(`${URL}/usuario/${id}`)
             //   console.log(data)
                    return data;
            } catch (error)
             {
                 
                throw error
            }
        }
    
        
    
    

export { crearUsuarioEC,  accederUsuarioEC,   obtenerUsuarioPorIdEC, editarUsuarioPorIdEC, obtenerUsuariosEC,eliminarUsuarioEC};