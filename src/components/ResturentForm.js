import React, { useState } from "react";

const ResturentForm = () => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId || !price || !dish) return;

    const order = {
      id: orderId,
      price: parseFloat(price),
      dish,
      table,
    };

    setOrderId("");
    setPrice("");
    setDish("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="id">Unique Order Id:</label>
        <input
          type="number"
          name="id"
          placeholder="uniqueid"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <br />
        <label for="price">Choose Price:</label>
        <input
          type="number"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label for="dish"> Choose Dish:</label>
        <input
          type="text"
          name="dish"
          placeholder="dish"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <br />

        <label for="table">Choose a table:</label>
        <select
          name="table"
          placeholder="choose a table"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        >
          <option value="table1">table1</option>
          <option value="table2">table2</option>
          <option value="table3">table3</option>
        </select>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default ResturentForm;
