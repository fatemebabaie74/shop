
import Button from '../../components/button/Button'
import CartItem from '../../components/cartitem/CartItem'
import Container from '../../components/container/Container'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'






function Cart() {
  

const {cartItems} = useShoppingCartContext();


  return (
    <Container>
      {
        cartItems.map(items=>(<CartItem key={items.id} {...items}/>))
      }
  
       <div className='bg-gray-100 rounded p-6'>
        <p className='text-right'>قیمت کل</p>
        <p className='text-right'> تخفیف شما </p>
        <p className='text-right'>قیمت نهایی </p>
       </div>
       <Button variant="success" className='mt-2'>ثبت سفارش</Button>
    </Container>
  )
}

export default Cart
