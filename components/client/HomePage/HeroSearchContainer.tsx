"use client";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";

const data = [
  {
    country: "Nepal",
  },
  {
    country: "Tibet",
  },
  {
    country: "Bhutan",
  },
  {
    country: "India",
  },
];

const HeroSearchContainer = () => {
  const [isCountry, setIsCountry] = useState([]);
  return (
    <div className="px-8 py-4 rounded-lg shadow-lg hero-search-container">
      <p className="text-primary text-xl font-semibold flex gap-1 items-center">
        <FiSearch /> Find My Trip
      </p>
      <div className="flex flex-col lg:flex-row items-end gap-8 mt-4">
        {/* Destination */}
        <Select
          label="Destination"
          size="sm"
          startContent={<FaMapMarkerAlt />}
          placeholder="Select Destination"
          className="text-primary"
        >
          {data.map((list, i) => {
            return <SelectItem key={i}>{list.country}</SelectItem>;
          })}
        </Select>

        {/* Destination */}
        <Select
          label="Activity"
          size="sm"
          startContent={<TbTrekking />}
          placeholder="Select Activity"
          className="text-primary"
        >
          {data.map((list, i) => {
            return <SelectItem key={i}>{list.country}</SelectItem>;
          })}
        </Select>

        {/* Destination */}
        <Select
          label="Duration"
          size="sm"
          startContent={<LuCalendarClock />}
          placeholder="Select Duration"
          className="text-primary"
        >
          {data.map((list, i) => {
            return <SelectItem key={i}>{list.country}</SelectItem>;
          })}
        </Select>

        <Button
          size="lg"
          variant="solid"
          color="primary"
          radius="sm"
          startContent={<FiSearch />}
          className="search-btn w-full"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSearchContainer;
