import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import { useQuery } from 'react-query';

const MyOrder = () => {
  const [user] = useAuthState(auth)


  const { data: orders, isLoading, refetch } = useQuery(['orders'], () =>
    fetch(`http://localhost:8000/order?email=${user.email}`).then((res) => res.json())

  );
   console.log(orders);
  if (isLoading) {
    return <span className="loading s loading-ring loading-lg"></span>;
  }
  // console.log(ords);

  return (
    <div className='grid  justify-center'>
      {

        orders.map(order => <Order
          order={order}
          refetch={refetch}></Order>)
      }

    </div>
  );
};

export default MyOrder;