import React from "react";

const links = ["AaaS", "Tools", "Bo Knows", "Fyf", "Team", "Blog"];

function Nav() {
  return (
    <nav className="bg-gray-300 flex justify-center items-center p-4">
      <a className="mr-4 font-bold uppercase">Quality Automation</a>
      <ul className="flex justify-center mr-auto">
        {links.map((link, i) => (
          <li key={i} className="mx-1 uppercase font-semibold">
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
      <div>
        <input placeholder="Search" className="rounded-md px-2"></input>
        <button className="ml-2 mr-4">🔍</button>
      </div>
      <button>☀️</button>
    </nav>
  );
}

export default Nav;
