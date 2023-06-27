import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Offers.module.css";
import Link from "next/link";
import axios from "axios";

function Offers() {
  const [data, setData] = useState(null);
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3OTIwOTE1LCJpYXQiOjE2ODc4MzQ1MTUsImp0aSI6ImM0YzQ0MGJjNWRkMzRjZmNiOGQ0NzFkMDZjMTVhZGI5IiwidXNlcl9pZCI6Mn0.ohXfpn3PEmLtWn1qafDyyQz1WTbZIb3PeuCYZc4e6mw";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/user/all-offers",
          {
            headers: {
              // Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        setData(response.data);
        console.log("from local", response.data);
        console.log(response.headers.Authorization);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const acceptOffer = async (id) => {
    try {
      const response = await axios.post("http://localhost:8000/user/accept-swap-offer", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3OTcwOTA4LCJpYXQiOjE2ODc4ODQ1MDgsImp0aSI6ImY5ZGY4ZDM2YzE5MjRlYWNhY2UzMGRlMzYzMWE2MTRkIiwidXNlcl9pZCI6Mn0.-xU644QElcWVN5A89kQ6klJT3wQS1h41Zjgk1ca7V1k"
        },
        body: JSON.stringify({"id": id })
      })
      console.log("response is here", response)
    }catch (error) {
    console.error("Error posting data", error)
  }
}

const handleAcceptOffer = (id) => {
  acceptOffer(id)
}
  return (
    <div className={styles.container}>
      <div className={styles.make_offer}>
        <h1>Swap offers</h1>
        {data?.data &&
          data?.data.map((data) => (
            <div className={styles.offer_container}>
              <div key={data.id}>
                <p>
                  {data.offer_maker_name} has made a swap offer to swap{" "}
                  {data.number_of_token_to_swap} {data.token_to_swap} for {data.number_of_token_to_recieve} {data.token_to_recieve}
                </p>
                <button onClick={handleAcceptOffer(data.id)}>Accept Swap</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Offers;
