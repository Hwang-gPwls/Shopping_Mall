import React from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Cart = () => {
  const carts = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  console.log(carts);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>name</th>
            <th>count</th>
          </tr>
        </thead>
        {/* <tbody>
          {carts.map((cart) => {
            <tr key={cart.id}>
              <td>{cart.id}</td>
              <td>{cart.name}</td>
              <td>{cart.count}</td>
            </tr>;
          })}
        </tbody> */}
      </Table>
    </>
  );
};

export default Cart;
