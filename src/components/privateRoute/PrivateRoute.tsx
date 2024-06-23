import { Navigate, Outlet } from "react-router-dom"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"


function PrivateRoute() {

  const {islogin} = useShoppingCartContext()
  return (
    <>
    {
      islogin? <Outlet/> : <Navigate to="/login"/>
    }
    </>
  )
}

export default PrivateRoute
