import React from "react";
import Head from "next/head";
import styles from "../styles/HomePage.module.css";
import Link from "next/link";

// import { connect } from "../../index.js";

function Home() {
  return (
    <div className={styles.top_container}>
      <div className={styles.main_container}>
        <Head>
          <title>SwapSync</title>
          <link rel="icon" href="/swapsync.ico" />
        </Head>

        <div className={styles.container}>
          <button className={styles.connect_wallet_btn}>
            <h3>connect wallet</h3>
          </button>
          <div className={styles.make_offer}>
            <h1>Make swap offer</h1>
            <form
              action="/send-data-here"
              method="post"
              className={styles.make_offer_form}
            >
              <label for="token-to-swap">Token to swap</label>
              <input
                type="text"
                id="token-to-swap"
                name="token-to-swap"
                required
                className={styles.input}
              />
              <label for="amount-to-swap">Amount</label>
              <input
                type="text"
                pattern="[0-9]*"
                id="amount-to-swap"
                name="amount-to-swap"
                required
                className={styles.input}
              />
              <label for="token-to-receive">Token to receive</label>
              <input
                type="text"
                id="token-to-receive"
                name="token-to-receive"
                required
                className={styles.input}
              />
              <label for="amount-to-receive">Amount</label>
              <input
                type="text"
                id="amount-to-receive"
                name="amount-to-receive"
                required
                className={styles.input}
              />
            </form>{" "}
            <button className={styles.swap_offer_btn}>Make offer</button>
          </div>
          <div className={styles.offer_list}></div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.container}>
            <div className={styles.make_offer}>
              <h1>Swap history</h1>
            </div>
            <div className={styles.offer_list}></div>
          </div>
        </div>
      </div>
      <button className={styles.swap_offer_btn}>
        <Link href="/offers">
          <h3>See swap offers</h3>
        </Link>
      </button>
    </div>
  );
}

export default Home;
