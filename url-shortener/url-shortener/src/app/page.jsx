import React from "react";
import UrlPage from "./features/page";
import PricingPage from "./pricing/page";
import ResourcePage from "./resources/page";

export default function Home() {
  return (
    <div className="min-w-full flex">
      <UrlPage />
    </div>
  );
}
