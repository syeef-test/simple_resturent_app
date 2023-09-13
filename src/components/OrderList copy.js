import React from "react";

const OrderList = ({ orders, deleteOrder }) => {
  return (
    <div>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <span>ID: {order.id}</span>
            <span>Price: ${order.price}</span>
            <span>Dish: {order.dish}</span>
            <span>Table: {order.table}</span>
            <button onClick={() => deleteOrder(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
