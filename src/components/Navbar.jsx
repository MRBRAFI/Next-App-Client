import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black ">
      <div className="w-11/12 mx-auto bg-black flex justify-between shadow-sm py-5">
        <div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            CourseVerse
          </Link>
        </div>

        {/* My Links */}
        <div className="hidden md:flex gap-10">
          <Link
            href={"/"}
            className="hover:cursor-pointer text-xl bg-orange-300 px-2 py-1 rounded text-black"
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className="hover:cursor-pointer text-xl bg-orange-300 px-2 py-1 rounded text-black"
          >
            All Products
          </Link>
          <Link
            href={"about"}
            className="hover:cursor-pointer text-xl bg-orange-300 px-2 py-1 rounded text-black"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="hover:cursor-pointer text-xl bg-orange-300 px-2 py-1 rounded text-black"
          >
            Contact
          </Link>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">Profile</div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
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
                    All Products
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
      </div>
    </div>
  );
}
