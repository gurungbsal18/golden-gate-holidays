"use client";
import React from "react";
import DepartureDateTable from "../DepartureDateTable";

const DepartureDateSection = () => {
  const title = "Join Last Minute Departure";
  const subtitle =
    "Book your last-minute adventure with us and embark on an unforgettable journey today!";
  return (
    <div className="bg-primary">
      <div className="container py-24">
        <div className="flex flex-col gap-2 text-white mb-16">
          <h4 className="title text-white">{title}</h4>
          <p className="text-sm">{subtitle}</p>
        </div>

        <DepartureDateTable />
      </div>
    </div>
  );
};

export default DepartureDateSection;
