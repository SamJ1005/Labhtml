import React from "react";

function ItemList({ items, removeItem }) {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
          <th>❌</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td>{item.quantity}</td>
            <td>₹{item.price * item.quantity}</td>
            <td>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;