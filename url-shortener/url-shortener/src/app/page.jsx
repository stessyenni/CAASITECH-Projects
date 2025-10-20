import React from "react";
import UrlPage from "./features/page";
import PricingPage from "./pricing/page";
import ResourcePage from "./resources/page";

export default function Home() {
  return (
    <div className="w-full font-poppins flex justify-center min-h-screen">
      <UrlPage />
      <PricingPage />
      <ResourcePage />
    </div>
  );
}
