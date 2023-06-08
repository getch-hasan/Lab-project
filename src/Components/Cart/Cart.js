import { useEffect, useState } from 'react';
import MyCart from './MyCart';
import { useQuery } from 'react-query';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Cart = ({buyProduct ,setBuyProduct}) => {
  
  
  const [user] = useAuthState(auth)
  const { data: carts, isLoading, refetch } = useQuery(['carts'], () =>
    fetch(`http://localhost:8000/cart?email=${user.email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <span className="loading s loading-ring loading-lg"></span>;
  }


    

  return (
    <div>
      <div>
        {carts?.map((cart) => (
          <MyCart
            key={cart._id}
            cart={cart}
            refetch={refetch}
            setBuyProduct={setBuyProduct}
            buyProduct={buyProduct}
         
          ></MyCart>
        ))}


      </div>
      

    </div>

  );
};

export default Cart;