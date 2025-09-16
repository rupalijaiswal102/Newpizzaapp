import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Veggie Pizza", price: 299, qty: 1 },
    { id: 2, name: "Coke 500ml", price: 60, qty: 2 },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = subtotal - discount;

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "dom50") {
      setDiscount(subtotal * 0.5);
    } else if (coupon.toLowerCase() === "freecoke") {
      setDiscount(60);
    } else {
      setDiscount(0);
      alert("Invalid coupon");
    }
  };

  const updateQty = (id, qty) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item
    ));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Domino's Cart 🛒</h1>

      {cart.map(item => (
        <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="mb-3">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button onClick={() => updateQty(item.id, item.qty - 1)}>-</Button>
                <span>{item.qty}</span>
                <Button onClick={() => updateQty(item.id, item.qty + 1)}>+</Button>
              </div>
              <p className="font-bold">₹{item.price * item.qty}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <div className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button onClick={applyCoupon}>Apply</Button>
        </div>

        <Card className="p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>- ₹{discount}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        </Card>

        <Button className="w-full text-lg py-6">Checkout</Button>
      </div>
    </div>
  );
}
