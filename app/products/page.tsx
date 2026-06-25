import styles from "./product.module.css";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Pin Panasonic CR2032",
      price: 25000,
      image: "/images/pin1.jpg",
    },
    {
      id: 2,
      name: "Pin Energizer AA",
      price: 45000,
      image: "/images/pin2.jpg",
    },
    {
      id: 3,
      name: "Pin Duracell AAA",
      price: 50000,
      image: "/images/pin3.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Danh sách sản phẩm
      </h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.card}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />

            <h3>{product.name}</h3>

            <p>
              {product.price.toLocaleString()} VNĐ
            </p>

            <button className={styles.button}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}