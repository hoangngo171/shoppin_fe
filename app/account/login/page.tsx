"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {

    let valid = true;

    // Reset lỗi
    setEmailError("");
    setPasswordError("");

    // Kiểm tra email
    if (email.trim() === "") {
      setEmailError("Vui lòng nhập email!");
      valid = false;
    }

    // Kiểm tra mật khẩu
    if (password.trim() === "") {
      setPasswordError("Vui lòng nhập mật khẩu!");
      valid = false;
    }

    // Nếu hợp lệ
    if (valid) {
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.form}>

        <h1 className={styles.title}>
          Đăng nhập
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {emailError && (
          <p className={styles.error}>
            {emailError}
          </p>
        )}

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Mật khẩu"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {passwordError && (
          <p className={styles.error}>
            {passwordError}
          </p>
        )}

        <button
          className={styles.button}
          onClick={handleLogin}
        >
          Đăng nhập
        </button>

        <div className={styles.forgot}>
          <a href="/account/forgot-password">
            Quên mật khẩu?
          </a>
        </div>

      </div>

    </div>
  );
}