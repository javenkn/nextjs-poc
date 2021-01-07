import React from "react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="m-auto mt-4 p-8 flex flex-col justify-center items-center w-3/4">
        {children}
      </main>
    </>
  );
}

export default Layout;
