import  { BrowserRouter as Router ,  Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import ListaProductosView from "../views/ListaProductosView";
import { Login } from "../views/Login";






export default function AppRouter() {

    
    return (        

        <>
            
        <Router>     
            
            <NavBar/>            
          <Routes>
            
            <Route path="/listarproductos"   element={<ListaProductosView />} />                                      
            <Route path="/" element={<Home />} />

            
        </Routes>          
        </Router>                    
        </>
    );
}
