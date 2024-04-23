"use client";
import { useEffect, useState } from "react";
import Thanks from "./Thanks";

const Checkout = ({ data }) => {
  const [showThanks, setShowThanks] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data?.amount * 100,
        currency: "INR",
        name: "EDAWS - Educational development And Agriculture Welfare Society",
        description:
          "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",
        image: "/logo.png",
        handler: async function (response) {
          const res = await fetch("/api/users", {
            cache: "no-cache",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data?.name,
              email: data?.email,
              phone: data?.phone,
              pan: data?.panNumber,
              amount: data?.amount,
            }),
          });
          if (res.ok) {
            console.log("User created successfully");
          } else {
            console.log("Something went wrong");
          }
          alert("Payment Successful");
          setTimeout(() => {
            setShowThanks(true);
            setTimeout(() => {
              setShowThanks(false);
            }, 10000);
          }, 2000);
          setTimeout(() => {
            window.location.reload();
          }, 6000);
        },
        prefill: {
          name: data?.name,
          email: data?.email,
          contact: data?.phone,
        },
        theme: {
          color: "#3e9c35",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  }, [data]);

  return <>{showThanks && <Thanks />}</>;
};

export default Checkout;
