"use client";

import { useCart }
from "../context/CartContext";

export default function CartPage() {

  const {
  cart,
  increase,
  decrease,
  removeFromCart,
  clearCart,
} = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price *
      item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>
        Giỏ hàng
      </h1>

      {cart.map((item) => (

        <div
          key={item.id}
          style={{
            border:
              "1px solid #ddd",
            marginBottom: "15px",
            padding: "15px",
          }}
        >

          <h3>
            {item.name}
          </h3>

          <p>
            Giá:
            {" "}
            {item.price.toLocaleString()}
            VNĐ
          </p>

          <p>
            Số lượng:
            {" "}
            {item.quantity}
          </p>

          <button
            onClick={() =>
              increase(item.id)
            }
          >
            +
          </button>

          <button
            onClick={() =>
              decrease(item.id)
            }
          >
            -
          </button>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Xóa
          </button>
          
        <button
  onClick={clearCart}
>
  Xóa toàn bộ giỏ hàng
</button>
        </div>

      ))}

      <h2>
        Tổng tiền:
        {" "}
        {total.toLocaleString()}
        VNĐ
      </h2>

    </div>
  );
}