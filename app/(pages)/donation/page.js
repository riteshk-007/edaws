import DonationForm from "@/app/components/DonateForm";
import React from "react";

export const metadata = {
  title:
    "Donation | EDAWS - Educational development And Agriculture Welfare Society | Donatation",
  description:
    "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",
};
const Donation = () => {
  return (
    <div className="w-full h-full">
      <DonationForm />
    </div>
  );
};

export default Donation;
