import axios from "axios";
//import  {storage} from "../config/firebase";



const URL  = `${process.env.REACT_APP_BACK_URL}`
//const URL  = `${process.env.REACT_APP_NUBE}`


const obtenerProductos = async  () =>{
    try {
        
        console.log(URL)

        const  datos  = await axios.get(`${URL}/producto`);
        console.log(datos)
        
        const { data }  = await axios.get(`${URL}/producto`);
        
        
        return data;
    } catch (error) {
        throw error;
        
    }

};

const crearProducto = async (nuevoProducto) =>{
   // console.log("ok",nuevoProducto)
    try {
        
        const headers ={
            "Content-Type": "application/json"        
        }
        const {data} = await axios.post(`${URL}/producto`,nuevoProducto,{headers})
        
        return data;

    } catch (error) {
        throw error;
    }
}

const obtenerProductoPorId  = async (id) => {
    try {
        
        const {data} = await axios.get(`${URL}/producto/${id}`)
    
            return data;
    } catch (error) {
        throw error
    }
}


const editarProductoPorId  = async (id, objProducto )  => {

      
        
        const datosact = {
            precio : objProducto.precio,            
            nombre : objProducto.nombre,
            unimedId : objProducto.unimedId,                        
            tipoProductoId : objProducto.tipoProductoId,            
            imagen: objProducto.imagen
        }        
           
 
    
    try {
        const headers = {
            "Content-Type": "application/json"        
        }
        
         await axios.put(`${URL}/producto/${id}`, datosact, { headers })
            return;
    } catch (error) {
        throw error
    }
}

const eliminarProducto  = async (id) => {
    try {                
        const rpta =  await axios.delete(`${URL}/producto/${id}`);
         
            return rpta ;
    } catch (error) {
        throw error;
    }
}


const ObtenerProductosPorPagina = async (pagina =1, limite = 6 ) =>{
    try {
        
        let { data } = await axios.get(`${URL}?page=${pagina}&limit=${limite}`);
        
        return data;
    } catch (error) {
        throw error;
    }
    }

    const obtenerProductoPorNombre = async (nombre) => {

        try {
    
            const  { data } = await axios.get(`${URL}/productobuscar?nombre=${nombre}`);            
            
            return data;
        } catch (error) {
            throw error;
        }
    }
        
    const subirImagen = (imagen) =>{

    /*    console.log(imagen);
        return new Promise ((resolve,reject) => {
        let refStorage  = storage.ref(`foto/${imagen.name}`)
        let tareaSubir  = refStorage.put(imagen)
            
        //uso callback pq recomienda reactjs y por ende retorna promesas
        
        tareaSubir.on(
            "state_changed", 
            ()=> {},
             (error) => {
                 reject(error);
                },
            () => {
            tareaSubir.snapshot.ref.getDownloadURL().then((urlImagen) => {
                resolve(urlImagen);
            });
        }
    );
    }); */
};

export { obtenerProductos,ObtenerProductosPorPagina, crearProducto, obtenerProductoPorId, editarProductoPorId, eliminarProducto, obtenerProductoPorNombre, subirImagen} ;
