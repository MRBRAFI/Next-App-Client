"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Navbar() {
  const { user, logoutUser, setLoading } = useAuth();

  console.log(user);

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        console.log("log out successful");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-95ack ">
      <div className="w-11/12 mx-auto bg-black flex justify-between shadow-sm py-5">
        <div>
          <Link href={"/"} className="text-2xl font-black text-orange-500">
            CourseVerse
          </Link>
        </div>

        {/* My Links */}
        <div className="hidden md:flex gap-10">
          <Link
            href={"/"}
            className="hover:cursor-pointer font-mono text-xl bg-orange-500 px-2 py-1 rounded text-black"
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className="hover:cursor-pointer font-mono text-xl bg-orange-500 px-2 py-1 rounded text-black"
          >
            All Courses
          </Link>
          <Link
            href={"about"}
            className="hover:cursor-pointer font-mono text-xl bg-orange-500 px-2 py-1 rounded text-black"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="hover:cursor-pointer font-mono text-xl bg-orange-500 px-2 py-1 rounded text-black"
          >
            Contact
          </Link>
        </div>

        {user?.email ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="Profile image"></img>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="border rounded p-2 text-left mt-2">
                  {user.displayName}
                </li>
                <li className="border rounded p-2 text-left mt-2">
                  {user.email}
                </li>
                <li className="border rounded p-2 text-left mt-2">
                  <button onClick={handleLogOut}>Logout</button>
                </li>

                <div className="block md:hidden">
                  <li>
                    <Link
                      href={"/"}
                      className="hover:cursor-pointer md:text-xl md:bg-orange-300 md:px-2 py-1 rounded md:text-teal-800"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/products"}
                      className="hover:cursor-pointer md:text-xl md:bg-orange-300 md:px-2 py-1 rounded md:text-teal-800"
                    >
                      All Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"about"}
                      className="hover:cursor-pointer md:text-xl md:bg-orange-300 md:px-2 py-1 rounded md:text-teal-800"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="hover:cursor-pointer md:text-xl md:bg-orange-300 md:px-2 py-1 rounded md:text-teal-800"
                    >
                      Contact
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="hover:cursor-pointer text-xl bg-orange-600 px-2 py-1 rounded text-gray-200"
          >
            Please log in
          </Link>
        )}
      </div>
    </div>
  );
}
