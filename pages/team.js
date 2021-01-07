import React from "react";
import faker from "faker";
import Card from "../components/Card";

function Team() {
  return (
    <>
      <h1 className="my-4 self-start">Director | Rock Star</h1>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center w-full">
        <Card
          className="col-span-full"
          title={faker.name.firstName()}
          description={faker.commerce.productDescription()}
        />
      </div>
      <h1 className="my-4 self-start">Track Leaders</h1>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center w-full">
        {Array(3)
          .fill(null)
          .map((name, i) => (
            <Card
              key={i}
              title={faker.name.firstName()}
              description={faker.commerce.productDescription()}
            />
          ))}
      </div>
      <h1 className="my-4 self-start">Additional Team Members</h1>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center w-full">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Card
              key={i}
              title={faker.name.firstName()}
              description={faker.commerce.productDescription()}
            />
          ))}
      </div>
    </>
  );
}

export default Team;
