import { useEffect, useState } from "react";
import Button from "../button/Button"
import { getProduct } from "../../pages/services/api";
import { Products } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem{
id: number ,
qty: number
}






function CartItem({id , qty}: ICartItem) {

const [product , setProduct]= useState<Products>()


const {handleDeccreaseProductQty , handleIncreaseProductQty , handleRemoveProduct} = useShoppingCartContext()
  useEffect(()=>{
    getProduct(id).then((data)=> {
  setProduct(data)
    });
  },[])

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
  <Link to={`/product/${id}`}>
  <img className= "rounded w-28" src={product?.image} alt="" />
  </Link>
      
      <div className="mr-5">
      <h3 className="text-right">{product?.title}</h3>
      <div className="mt-2">
      <Button onClick={()=>handleRemoveProduct(id)} variant="danger" className="mr-2"> Remove </Button>
      <Button onClick={()=>handleIncreaseProductQty(id)} variant="primary">+ </Button>
      <span className="mx-2">{qty}</span>
      <Button onClick={()=>handleDeccreaseProductQty(id)} variant="primary">- </Button>
      </div>
      </div>
    </div>
   
  )
}

export default CartItem
