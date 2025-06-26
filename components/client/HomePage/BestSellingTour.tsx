import { Button } from "@heroui/button";
import React from "react";

import Image from "next/image";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { PackageData } from "@/database/packageDb";

const BestSellingTour = () => {
  const title = "Best Selling Tour";
  const subtitle =
    'Our most popular trek – a breathtaking journey through rugged trails, hidden valleys, and unforgettable mountain vistas."';
  return (
    <div className="container mx-auto py-32">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-2 ">
        <div>
          <h2 className="title text-primary">{title}</h2>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
        <Button className="rounded-md" color="primary">
          Explore Package
        </Button>
      </div>

      {PackageData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {PackageData.map((list: any) => {
            return (
              <div
                key={list.id}
                className="package-card border-2 rounded-md overflow-hidden"
              >
                <div className="package-card-image-section">
                  <Image
                    src={list.image}
                    alt={list.title}
                    height={1920}
                    width={1080}
                    className="package-img"
                  />
                  <p className="package-card-banner-message">
                    {list.bannerMessage}
                  </p>
                </div>
                <div className="package-card-content flex flex-col gap-2 py-4 px-2">
                  <div className="flex justify-between items-center">
                    <p className="text-xs flex gap-1 items-center text-muted">
                      <FaMapMarkerAlt className="text-primary" />
                      {list.region}, {list.country}
                    </p>
                    <p className="text-xs flex gap-1 items-center text-muted">
                      <LuCalendarClock className="text-primary" />
                      {list.duration}
                    </p>
                  </div>
                  <h4 className="font-semibold text-primary">{list.title}</h4>
                  <div className="flex justify-between items-center pb-2 border-b-1">
                    <span>
                      <p className="text-xs text-muted">
                        <span className="font-semibold">Difficulty: </span>
                        {list.difficulty}
                      </p>
                    </span>
                    <span>
                      <p className="text-xs text-muted">
                        <span className="font-semibold">Max. Altitude: </span>
                        {list.altitude}
                      </p>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex flex-col">
                      <p className="text-muted text-xs">Price Starting From</p>
                      <p className="text-xl font-semibold text-primary">
                        US$ {list.price}
                      </p>
                    </span>
                    <span className="flex flex-col items-end">
                      <p className="text-muted text-xs">
                        {list.reviews} Reviews
                      </p>
                      <span className="flex items-center gap-1 text-warning">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No package available</p>
      )}
    </div>
  );
};

export default BestSellingTour;
