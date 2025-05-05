
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-bold mb-3 text-white">About</h4>
          <p className="text-sm">
            SetDesks helps you build ergonomic, stylish and budget-friendly
            workspaces.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white">Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/Desk-info">
                Desk Info
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white">Contact</h4>
          <p className="text-sm">support@setdesks.com</p>
          <p className="text-sm">+1 (555) 123‑4567</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        © 2024 SetDesks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
