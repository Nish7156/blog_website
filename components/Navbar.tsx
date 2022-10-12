import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <Link href={""}>
          <div className="flex items-center cursor-pointer">
            <Image src={""} width={100} height={50} />
            <samp className="ml-2 text-green-500">Nishants Blog</samp>
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="mr-6 text-gray-400">
            <a href="#">Products</a>
          </li>
          <li className="mr-6 text-gray-400">
            <a href="#">Price</a>
          </li>
          <li className="mr-6 text-gray-400">
            <a href="#">Service</a>
          </li>
          <li className="mr-6 text-gray-400">
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="mr-6">
            <a href="#">Log In</a>
          </li>
          <li className="mr-6 text-gray-300">
            <a href="#" className="px-2 py-2 text-white bg-green-600">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
