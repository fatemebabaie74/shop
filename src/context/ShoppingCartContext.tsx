import  { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../pages/services/api";
import { useNavigate } from "react-router-dom";


interface ShoppingCartProvider{
    children: React.ReactNode
}
interface CartItem{
    id: number,
    qty: number
}
interface ShoppingCartContext{
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: number)=> void
    handleDeccreaseProductQty: (id: number)=> void
    handleRemoveProduct: (id: number)=> void
    getProductQty: (id: number)=> number
    cartQty: number
    islogin: boolean
    handleLogin: (username: string , password : string)=>void
    handleLogout: ()=>void
}

 export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}


 export function ShoppingCartProvider({children}:ShoppingCartProvider){


    const [cartItems , setCartItem]= useLocalStorage<CartItem[]>("cartItems" , [])

 const handleIncreaseProductQty =(id: number)=>{
setCartItem(CurrentItems=>{
    let selectedItem = CurrentItems.find(item=> item.id == id)
    if(selectedItem == null){
        return [...CurrentItems , {id: id , qty: 1}]
    }
    else{
     return  CurrentItems.map(item=>{
            if(item.id == id){
                return{
                    ...item, 
                    qty: item.qty +1
                }
            }
            else{
                return item
            }
        })
    }
} )
}


const handleDeccreaseProductQty =(id: number)=>{
    setCartItem(CurrentItems=>{
        let selectedItem = CurrentItems.find(item=> item.id == id)
        if(selectedItem?.qty=== 1){
            return CurrentItems.filter(item=>item.id !== id)
        }
        else{
         return  CurrentItems.map(item=>{
                if(item.id == id){
                    return{
                        ...item, 
                        qty: item.qty -1
                    }
                }
                else{
                    return item
                }
            })
        }
    } )
    }


const getProductQty=(id: number)=>{
   return cartItems.find(item=> item.id === id)?.qty || 0
}


const handleRemoveProduct= (id: number)=>{
    setCartItem(CurrentItems=> CurrentItems.filter(item=> item.id !== id))
}


const cartQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty , 0)



 const [islogin , setLogin]=useState(false)


const Navigate = useNavigate()

 const handleLogin = (username: string , password : string)=>{
    login(username , password).finally(()=>{ 
        
        let token =  "N2IxYjUzMzQtMDkwYi00ODE0LWIzZWQtOWI4YWRkMDlkOGI4OjY0YWNmYTc4LWJmMzEtNDQ1Zi04NDI3LTgzOGJiYjEyMWRkMg=="
        localStorage.setItem("token" , token)
        setLogin(true)})
   Navigate("/")
 }

 const handleLogout = ()=>{
    setLogin(false)
    Navigate("/login")
    localStorage.removeItem("token")
 }


 useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token){
        setLogin(true)
    }
 },[])
  return(
    <ShoppingCartContext.Provider value={{cartItems, 
    handleIncreaseProductQty ,
     handleDeccreaseProductQty ,
      getProductQty ,
       handleRemoveProduct ,
        cartQty ,
        islogin,
        handleLogin , 
        handleLogout}}>
        {children}
    </ShoppingCartContext.Provider>
 )
}

