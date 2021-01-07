import React, { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { name: "AaaS", href: "aaas" },
  { name: "Tools", href: "tools" },
  { name: "Bo Knows", href: "bo-knows" },
  { name: "Fyf", href: "find-your-fix" },
  { name: "Team", href: "team" },
  { name: "Blog", href: "blog" },
];

function MobileNavIcon({ className }) {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      fill="#111"
      viewBox="0 0 24 24"
    >
      <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
    </svg>
  );
}

function MobileNavChevron({ className }) {
  return (
    <svg
      className={className}
      fill="#111"
      height="30px"
      width="30px"
      viewBox="0 0 185.4 300"
    >
      <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      fill="#111"
      height="30px"
      width="30px"
      viewBox="0 0 24 24"
    >
      <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
    </svg>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function escapeHandler(event) {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", escapeHandler);

    return () => document.removeEventListener("keydown", escapeHandler);
  }, []);
  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}></div>
      )}
      <nav className="bg-gray-200 flex justify-center items-center p-4">
        <Link href="/">
          <a className="mr-auto lg:mr-4 lg:ml-0 font-bold uppercase">
            Quality Automation
          </a>
        </Link>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute z-30 top-0 right-0 w-3/5 h-full py-8 px-9 text-2xl bg-white justify-center mr-auto lg:relative lg:flex lg:bg-transparent lg:text-base lg:p-0 lg:w-auto`}
        >
          {links.map((link, i) => (
            <li key={i} className="my-2 lg:mx-1">
              <Link href={link.href}>
                <a className="flex items-center uppercase font-semibold w-full">
                  {link.name}{" "}
                  <MobileNavChevron className="inline-block lg:hidden w-3 h-3 ml-auto" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex relative">
          <div className="hidden lg:block">
            <input
              placeholder="Search"
              className="bg-gray-300 lg:inline-block lg:order-2 pl-12 pr-10 py-2 rounded-full focus:outline-none"
            ></input>
          </div>
          <button className="icon-button lg:order-1 lg:absolute top-0 left-0">
            <SearchIcon className="w-6 h-6" />
          </button>
        </div>
        <button
          className="icon-button lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MobileNavIcon />
        </button>
        {/* <button className="ml-auto lg:ml-0">☀️</button> */}
      </nav>
    </>
  );
}

export default Nav;
