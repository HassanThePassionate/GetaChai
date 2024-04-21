import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-4">
      <div className="logo font-bold text-xl">GetMeaChai!</div>
      <ul className="flex items-center gap-4">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Sign Up</Link>
        </li>
        <li>
          <Link href="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
