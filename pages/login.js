import React, {useState} from "react";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";



function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Handle the API response
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SwapSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login</h1>
      <Image
        src="/images/undraw_mobile_apps_re_3wjf 1.png"
        height={250} // Desired size with correct aspect ratio
        width={200} // Desired size with correct aspect ratio
        alt="login-image"
      />
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="Email"
          required
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="Password"
          required
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.login_btn}>
          <Link href="/home">
            <h3>Login</h3>
          </Link>
        </button>
      </form>{" "}
      <p>Not registered?</p>
      <Link href="/signup">
        <h3>Sign up</h3>
      </Link>
    </div>
  );
}

export default login;
