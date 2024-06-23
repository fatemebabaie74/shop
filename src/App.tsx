import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import {  useShoppingCartContext } from "./context/ShoppingCartContext"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import Login from "./pages/login/Login"


function App() {

const {islogin} = useShoppingCartContext()
  return (
    

     <Layout>
   <Routes>
     <Route path="/" element={<Home/> }/>
     <Route path="/store" element={<Store/> }/>
     <Route path="/product/:id" element={<Product/> }/>
     <Route path="/login" element={ islogin ? <Navigate to="/"/> :<Login/>}/>

     <Route element={<PrivateRoute/>}>
      <Route path="/cart" element={<Cart/> }/>
     </Route>
     
    </Routes>
   </Layout>


  
    
  )
}

export default App
