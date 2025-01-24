"use client";

import { FaRegHeart, FaSearch } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Link href="/" className="hover:text-gray-500">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <ul className="flex space-x-2 sm:space-x-4 lg:space-x-8 text-sm font-medium text-gray-800">
        <li>
          <Link
            href="/products"
            className="hover:text-gray-500 hidden sm:block lg:inline-block"
          >
            New & Featured
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
          >
            Kids
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-gray-500 text-xs sm:text-sm"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
          >
            SNKRS
          </Link>
        </li>
      </ul>

      {/* Right Side - Search Bar and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-3 py-2 text-sm text-gray-700 bg-gray-100">
          <FaSearch className="mr-2 text-gray-500 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-16 sm:w-24 md:w-40 lg:w-44 placeholder:text-gray-400"
          />
        </div>

        {/* Wishlist */}
        <Link href="/checkout">
          <FaRegHeart className="text-base sm:text-lg hover:text-gray-500 cursor-pointer" />
        </Link>

        {/* Shopping Bag */}
        <Link href="/cart">
          <RiShoppingBagLine className="text-base sm:text-lg hover:text-gray-500 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
