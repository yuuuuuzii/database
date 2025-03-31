// https://tailwindui.com/components/application-ui/navigation/navbars
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";

function Navbar() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nodeRef = useRef(null);
  const { pathname } = useLocation();
  const switchUserMenuOpen = () => setUserMenuOpen((prev) => !prev);
  const switchMobileMenuOpen = () => setMobileMenuOpen((prev) => !prev);
  const linkClass = (to) =>
    pathname === to
      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  const mobileLinkClass = (to) =>
    pathname === to
      ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* {<!-- Mobile menu button-->} */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={switchMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>

              {/* {`Icon when menu is open.
                Heroicon name: outline/x
                Menu open: "block", Menu closed: "hidden"

                Icon when menu is closed.
                Heroicon name: outline/menu
                Menu open: "hidden", Menu closed: "block"`} */}
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* {<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->} */}
                <Link to="/dashboard" className={linkClass("/dashboard")}>
                  Dashboard
                </Link>
                <Link to="/team" className={linkClass("/team")}>
                  Team
                </Link>
                <Link to="/login" className={linkClass("/login")}>
                  Login
                </Link>
                <Link to="/signup" className={linkClass("/signup")}>
                  Signup
                </Link>
                <Link to="/users" className={linkClass("/users")}>
                  Users
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* {<!-- Heroicon name: outline/bell -->} */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* {<!-- Profile dropdown -->} */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={switchUserMenuOpen}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {/* {<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->} */}
              <Transition
                nodeRef={nodeRef}
                in={isUserMenuOpen}
                timeout={{ enter: 100, exit: 75 }}
              >
                {(state) => (
                  <div
                    ref={nodeRef}
                    className={
                      "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none " +
                      {
                        entering:
                          "transition ease-out duration-100 transform opacity-0 scale-95",
                        entered:
                          "transition ease-out duration-100 transform opacity-100 scale-100",
                        exiting:
                          "transition ease-in duration-75 transform opacity-100 scale-100",
                        exited:
                          "transition ease-in duration-75 transform opacity-0 scale-95 hidden",
                      }[state]
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </Transition>
            </div>
          </div>
        </div>
      </div>

      {/* {<!-- Mobile menu, show/hide based on menu state. -->} */}
      <div
        className={"sm:hidden " + (isMobileMenuOpen ? "" : "hidden")}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* {<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->} */}
          <Link to="/dashboard" className={mobileLinkClass("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/team" className={mobileLinkClass("/team")}>
            Team
          </Link>
          <Link to="/login" className={mobileLinkClass("/login")}>
            Login
          </Link>
          <Link to="/signup" className={mobileLinkClass("/signup")}>
            Signup
          </Link>
          <Link to="/users" className={mobileLinkClass("/users")}>
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
