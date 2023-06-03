
import MyCart from './MyCart';
import { useQuery } from 'react-query';


const Cart = () => {
   // const [carts,setCarts]=useState([])
  
    
    
        const { data: carts, isLoading, refetch } = useQuery(['carts'], () =>
          fetch('http://localhost:8000/cart').then((res) => res.json())
        );
    console.log(carts)
    if(isLoading){
      return <span className="loading s loading-ring loading-lg"></span>
      
    }
    return (
        <div>
            
           {
            carts?.map(cart=><MyCart
            key={cart._id}
            cart={cart}
            refetch={refetch}
           
           ></MyCart>)
           }
            
        </div>
    );
};

export default Cart;