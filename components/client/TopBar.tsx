import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
const TopBar = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Golden Gate Holidays"
            width={185}
            height={75}
          />
        </Link>

        <div className="hidden md:flex gap-8">
          <div className="flex items-end gap-1">
            <span className="topbar-icon">
              <FaEnvelope />
            </span>
            <span className="flex justify-end flex-col items-end">
              <p className="text-xs">Quick Questions? Email us</p>
              <p className="text-sm font-semibold">
                info@goldengateholidays.com
              </p>
            </span>
          </div>

          <div className="flex items-end gap-1">
            <span className="topbar-icon">
              <FaEnvelope />
            </span>
            <span className="flex justify-end flex-col items-end">
              <p className="text-xs">Talk To An Expert</p>
              <p className="text-sm font-semibold">+977 9801020642</p>
            </span>
            <span className="rounded-full overflow-hidden border-primary border-2">
              <Image
                src="/Experts/Dinesh.png"
                alt="Dinesh"
                height={50}
                width={50}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
