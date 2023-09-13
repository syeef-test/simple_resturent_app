import React from "react";

const OrderList = ({ orders, deleteOrder }) => {
  // Organize orders by table
  const ordersByTable = {};

  orders.forEach((order) => {
    const { table } = order;
    if (!ordersByTable[table]) {
      ordersByTable[table] = [];
    }
    ordersByTable[table].push(order);
  });

  return (
    <div>
      {/* Render a table for each table number */}
      {Object.keys(ordersByTable).map((tableNumber) => (
        <div key={tableNumber}>
          <h2>Table {tableNumber}</h2>
          <table className="center-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Price</th>
                <th>Dish</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ordersByTable[tableNumber].map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>${order.price}</td>
                  <td>{order.dish}</td>
                  <td>
                    <button onClick={() => deleteOrder(order.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
