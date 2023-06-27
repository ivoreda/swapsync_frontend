import React from "react";
import styles from "../styles/Signup.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function signup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SwapSync</title>
        <link rel="icon" href="/swapsync.ico" />
      </Head>
      <h1>Signup</h1>
      <Image
        src="/images/undraw_mobile_apps_re_3wjf 1.png"
        height={250}
        width={200}
        alt="signup-image"
      />
      <form
        action="/send-data-here"
        method="post"
        className={styles.signup_form}
      >
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="Email"
          required
          className={styles.input}
        />
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="Username"
          required
          className={styles.input}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="Password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.signup_btn}>
          <Link href="/home">
            <h3>Sign up</h3>
          </Link>
        </button>
      </form>{" "}
      <p>Already have an account?</p>
      <Link href="/login">
        <h3>Login</h3>
      </Link>
    </div>
  );
}

export default signup;
