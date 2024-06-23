import { Products } from "../../types/servers"

type ProductItem = Products



function ProductItem({title , price , description , image}: ProductItem) {
  return (
    <div className="shadow border rounded pb-3">
     <img className= "rounded-t w-full" src={image} alt=""  />
     <div className="flex justify-between px-5 mt-5">
        <h3 className="font-weight-700">{title}</h3>
        <span className="font-bold">{price}$</span>
     </div>
     <div className="mt-3 px-4 ">
        <p className="line-clamp-1 text-left text-gray-500">
    {description}</p>
   </div>
    </div>
  )
}

export default ProductItem
