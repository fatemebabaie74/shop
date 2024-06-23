import  { ComponentProps } from "react"
  

type TVariant =  "primary" | "secondary " | "danger" | "success" | "warning"


type TButton = ComponentProps<"button"> &{
    variant?: TVariant
}
    

function Button({children ,variant, style , ...rest}:TButton) {
console.log(checkVariant(variant))


  return (

    <button {...rest} style={{ borderRadius:"7px" , padding: "4px 8px",...style,...checkVariant(variant)} }> {children}</button>
  )
}

export default Button
 
function checkVariant (variant?: TVariant){
    if (variant === "primary"){
        return {backgroundColor: "#008bff" }
    }
    else if(variant === "danger"){
        return{backgroundColor : "red"}
    }
    else if(variant === "warning"){
        return{backgroundColor : "yellow"}
    }
    else if(variant === "secondary "){
        return{backgroundColor : "purpule"}
    }
    else if(variant === "success"){
        return{backgroundColor : "green"}
    }
}