import React, {
  useState
} from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(null);

  const calculateTotal = () => {
    const amt = parseFloat(amount);
    const dis = parseFloat(discount);

    if (isNaN(amt) || isNaN(dis)) {
      alert("Please enter valid numbers!");
      return;
    }

    const discountValue = (amt * dis) / 100;
    const finalAmount = amt - discountValue;

    setTotal(finalAmount.toFixed(2));
  };

  return React.createElement(
    "div", {
      className: "container",
    },
    [
      React.createElement(
        "h1", {
          key: "title",
        },
        "📃 Bill Discount Calculator"
      ),

      React.createElement("input", {
        key: "amount",
        type: "number",
        placeholder: "Enter Amount",
        value: amount,
        onChange: (e) => setAmount(e.target.value),
      }),

      React.createElement("input", {
        key: "discount",
        type: "number",
        placeholder: "Enter Discount %",
        value: discount,
        onChange: (e) => setDiscount(e.target.value),
      }),

      React.createElement(
        "button", {
          key: "button",
          onClick: calculateTotal,
        },
        "Calculate"
      ),

      total !== null &&
      React.createElement(
        "h2", {
          key: "result",
          className: "result",
        },
        `✅ Total After Discount: ₹${total}`
      ),
    ]
  );
}

export default App;