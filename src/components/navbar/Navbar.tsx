import { Link } from "react-router-dom"
import Container from "../container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import { IoCartSharp } from "react-icons/io5";
function Navbar() {

const {cartQty , handleLogout} = useShoppingCartContext()

  return (
    <div className="h-14 border-b shadow flex items-center ">
    <Container >   
       <div className="flex justify-between flex-row-reverse ">
      <ul className="flex flex-row-reverse">
        <li className="ml-4"><Link to="/">خانه</Link></li>
        <li className="ml-4"><Link to="/store">فروشگاه</Link></li>
      </ul>
     <div className="flex ">
      <button className="mb-2 mr-6" onClick={handleLogout}>Logout</button>
      <Link to={"/cart"}>
      <button className="text-3xl  "> <IoCartSharp/></button>
       <span className="absolute w-5 h-5 bg-red-600 flex justify-center items-center rounded-full text-white top-2 left-72 text-sm">{cartQty !== 0 ? cartQty : ""}</span> 
      </Link>
    </div>
    </div>
    </Container>
    </div>

  )
}

export default Navbar
