"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "about-me", label: "ABOUT ME" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "tool-kits", label: "TOOL KITS" },
    { id: "job-experience", label: "JOB EXPERIENCE" },
    { id: "contact", label: "CONTACT" }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id); // highlight active link
      setOpen(false); // close sidebar if mobile
    }
  };

  return (
    <>
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        {/* Desktop Links */}
        <ul
          style={{ fontFamily: "'Red Rose', cursive" }}
          className="hidden md:flex items-center justify-between sm:text-base md:text-lg text-2xl font-semibold text-gray-600 w-full"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:cursor-pointer hover:text-gray-900 ${
                active === link.id ? "text-gray-900" : ""
              }`}
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform
        ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-500">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul
          style={{ fontFamily: "'Red Rose', cursive" }}
          className="mt-4 space-y-4 px-6 text-2xl text-gray-600"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:cursor-pointer hover:text-gray-900 ${
                active === link.id ? "text-gray-900" : ""
              }`}
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark overlay behind */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
