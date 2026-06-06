import styles from "./forgot-password.module.css";

export default function ForgotPasswordPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>

        <h1 className={styles.title}>
          Quên mật khẩu
        </h1>

        <p className={styles.description}>
          Nhập email của bạn để nhận liên kết đặt lại mật khẩu.
        </p>

        <input
          type="email"
          placeholder="Nhập email của bạn"
          className={styles.input}
        />

        <button className={styles.button}>
          Gửi yêu cầu
        </button>

        <div className={styles.backLogin}>
          <a href="/account/login">
            ← Quay lại đăng nhập
          </a>
        </div>

      </form>
    </div>
  );
}