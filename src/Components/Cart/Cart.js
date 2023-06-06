import { useState } from 'react';
import MyCart from './MyCart';
import { useQuery } from 'react-query';
import BuyModal from './BuyModal';

const Cart = () => {
  const [buy, setBuy] = useState(null);

  const { data: carts, isLoading, refetch } = useQuery(['carts'], () =>
    fetch('http://localhost:8000/cart').then((res) => res.json())
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
            carts={carts}
            refetch={refetch}
            setBuy={setBuy}
          ></MyCart>
        ))}
      </div>
      {buy && <BuyModal buy={buy} setBuy={setBuy}></BuyModal>
      }
    </div>
  );
};

export default Cart;