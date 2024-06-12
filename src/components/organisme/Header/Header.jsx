import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Button from "../../atoms/Button/Button";

const name = localStorage.getItem("name");

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0, y: -50 },
        { height: "auto", opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
      gsap.to(menuIconRef.current, {
        rotation: 180,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(closeIconRef.current, { rotation: 0, opacity: 1, duration: 0.5 });
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(menuIconRef.current, { rotation: 0, opacity: 1, duration: 0.5 });
      gsap.to(closeIconRef.current, {
        rotation: -180,
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [dropdownOpen]);


  const handleLogout = () => {
    localStorage.removeItem("name");
    window.location.href = "/";
  };

  return (
    <header className="z-50">
      <div className="navbar flex justify-between items-center backdrop-blur-md bg-gradient-to-r from-slate-300 to-primary px-4 md:px-8">
        {/* PROFILE */}
          <div className="flex items-center gap-2">
            <img
              src="https://akcdn.detik.net.id/customthumb/2014/08/07/398/fportraitrotated_and_cropped_1_.jpg?w=700&q=90"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <span className="hidden md:block text-lg londrina-regular bg-gradient-to-l from-slate-900 to-50% to-primary text-transparent bg-clip-text">Hi, {name}..</span>
            <span className="md:hidden text-lg londrina-regular bg-gradient-to-l from-slate-900 to-50% to-primary text-transparent bg-clip-text">Hi, {name.substring(0, 7)}..</span>
          </div>

        {/* CART */}
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <summary className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-primary text-white">
                  8
                </span>
              </summary>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MENU */}
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              ref={menuIconRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
              style={{ position: "absolute" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              ref={closeIconRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
              style={{ opacity: 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* NAVIGATION DROPDOWN */}
        <div
          ref={dropdownRef}
          className="dropdown-content absolute right-1 md:right-[2rem] mt-[14rem] md:mt-[14.5rem] bg-gradient-to-r from-slate-400 from-4% to-primary to-90% shadow-lg rounded-md overflow-hidden"
          style={{ display: dropdownOpen ? "block" : "none" }}
        >
          <Link to="/home" className="block px-4 py-2 hover:bg-primary">
            Home
          </Link>
          <Link to="/product" className="block px-4 py-2 hover:bg-primary">
            Product
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-primary">
            About
          </Link>
          <Button variant="bg-gradient-to-r from-slate-400 from-4% to-red-700 to-90% transform transition duration-500 hover:scale-110 shadow-lg" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </header>
  );
}
