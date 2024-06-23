import { Link } from "react-router-dom"
import Container from "../../components/container/Container"
import ProductItem from "../../components/productitem/ProductItem"
import { useEffect, useState } from "react"
import { getProducts } from "../services/api"
import { Products } from "../../types/servers"


function Store() {

const [products , setProducts] = useState<Products[]>([])


useEffect(()=>{
  getProducts().then(resault=>{
    setProducts(resault)
  })
},[])


  return (
    <div>
    <Container>
    <h1 className="text-right mt-6">جدیدترین محصولات</h1>
    <div className="grid grid-cols-4 gap-4 mt-5">

   {products.map((item)=>(  
       <Link key={item.id} to={`/product/${item.id}`}>
        <ProductItem {...item}/>
      </Link>))}

   </div> 
  
   </Container>

    </div>
  )
}

export default Store
