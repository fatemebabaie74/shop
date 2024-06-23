import { useParams } from "react-router-dom"
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { Products } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


function Product() {


 

const params = useParams<{id: string}>();
const [productDetail , setProductDetail] = useState<Products>()

const {handleIncreaseProductQty , cartItems , handleDeccreaseProductQty , getProductQty , handleRemoveProduct} = useShoppingCartContext();

useEffect(()=>{
  getProduct(params.id as string).then((data)=> {
setProductDetail(data)
  });
},[])

console.log(cartItems)

  return (
    <div>
   <Container >
    <div className="h-96 shadow mt-5 grid grid-cols-12">
    <div className=" col-span-10 p-4">

    <h1 className="text-right">{productDetail?.title}</h1>
    <div>
    <p className="text-right">${productDetail?.price}</p>
    <p className="text-right">
       {productDetail?.description}</p>
    </div>
 </div>
        <div className=" col-span-2 p-3 bg-sky-100">
    <img
    className="rounded"
     src={productDetail?.image} alt="" />



     {
getProductQty(parseInt(params.id as string)) === 0 ? 
 <Button onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))} className="mt-2 w-full" variant="primary">
Add to cart
</Button> 
:
<>
<div className="grid grid-cols-3">
<Button onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))} className="mt-2 w-full" variant="primary">
+
</Button> 
  <span className="flex justify-center items-center">{getProductQty(parseInt(params.id as string))}</span>
<Button onClick={()=>handleDeccreaseProductQty(parseInt(params.id as string))} className="mt-2 w-full" variant="primary">
      -
     </Button>
</div>
<Button onClick={()=>(handleRemoveProduct(parseInt(params.id as string)))} className="mt-2 w-full" variant="danger">
Remove
</Button> 
</>

}


    </div>
 
    </div>
   </Container>
   
   </div>
  )
}

export default Product
