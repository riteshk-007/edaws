"use client";
import { useEffect, useState } from "react";
import Thanks from "./Thanks";

const Checkout = ({ data }) => {
  const [showThanks, setShowThanks] = useState(false); // State to control the visibility of the Thanks component

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
        handler: function (response) {
          alert("Payment Successful");
          setTimeout(() => {
            setShowThanks(true);
            setTimeout(() => {
              setShowThanks(false);
            }, 10000);
          }, 4000);
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
