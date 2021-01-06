import React from "react";

function Card({ className = "", title = "", description = "", children }) {
  return (
    <div
      className={`w-full h-96 bg-red-400 flex flex-col justify-end p-4 ${className}`}
    >
      <h1 className="text-5xl w-full">{title}</h1>
      <p className="">{description}</p>
      {children}
    </div>
  );
}

export default Card;
