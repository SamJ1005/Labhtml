import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import Totals from "./components/Total";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  // Add new item
  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  // Remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="app">
      <h1>🧾 Bill & Discount Calculator</h1>

      {/* Item Form */}
      <ItemForm addItem={addItem} />

      {/* Item List */}
      <ItemList items={items} removeItem={removeItem} />

      {/* Discount & Totals */}
      <Totals
        subtotal={subtotal}
        discount={discount}
        setDiscount={setDiscount}
        discountAmount={discountAmount}
        total={total}
      />
    </div>
  );
}

export default App;