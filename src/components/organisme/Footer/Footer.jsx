import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center mt-2 p-4 bg-gradient-to-r from-slate-300 from-4% to-primary to-90%">
      <aside>
        <Link to="/">
        <img src="/images/shop.png" alt="logo" className="w-16 h-16" />
        </Link>
        <p className="londrina-black text-lg">Dimas Pamungkas Mursidi</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
}
