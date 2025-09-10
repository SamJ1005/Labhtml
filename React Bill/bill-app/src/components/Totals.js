import React from "react";

function Totals({ subtotal, discount, setDiscount, discountAmount, total }) {
  return (
    <div className="totals">
      <div className="discount">
        <label>Discount (%): </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
        />
      </div>

      <p>Total: ₹{subtotal}</p>
      <p>Discount: ₹{discountAmount}</p>
      <h2>Final TOTAL: ₹{total}</h2>
    </div>
  );
}

export default Totals;
