"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <nav className='bg-gray-900 text-white flex items-center justify-between p-4'>
      <div className='logo font-bold text-xl flex items-center justify-center gap-1'>
        <span>
          <img src='/black-tea.gif' alt='logo' width={34} />
        </span>
        GetMeaChai!
      </div>
      {/* <ul className='flex items-center gap-4'>
        <li>
          <Link href='#'>Home</Link>
        </li>
        <li>
          <Link href='#'>About</Link>
        </li>
        <li>
          <Link href='#'>Projects</Link>
        </li>
        <li>
          <Link href='#'>Sign Up</Link>
        </li>
        <li>
          <Link href='#'>Login</Link>
        </li>
      </ul> */}
      <div>
        <Link href='/login'>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>
            login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
