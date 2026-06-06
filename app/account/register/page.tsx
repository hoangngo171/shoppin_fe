import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>

        <h1 className={styles.title}>
          Đăng ký tài khoản
        </h1>

        <input
          type="text"
          placeholder="Họ và tên"
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          className={styles.input}
        />

        <button className={styles.button}>
          Đăng ký
        </button>

        <div className={styles.loginLink}>
          <a href="/account/login">
            Đã có tài khoản? Đăng nhập
          </a>
        </div>

      </form>
    </div>
  );
}