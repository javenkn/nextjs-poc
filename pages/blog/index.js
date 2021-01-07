import React from "react";
import faker from "faker";
import Card from "../../components/Card";

function Blog() {
  return (
    <>
      <h1 className="my-4 self-start">Blogs</h1>
      <Card
        title={faker.name.firstName()}
        description={faker.commerce.productDescription()}
      >
        <button className="button-link">Read more</button>
      </Card>
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center w-full mt-4">
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <Card
              key={i}
              title={faker.name.firstName()}
              description={faker.commerce.productDescription()}
            >
              <button className="button-link">Read more</button>
            </Card>
          ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center w-full mt-2">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Card
              key={i}
              title={faker.name.firstName()}
              description={faker.commerce.productDescription()}
            >
              <button className="button-link">Read more</button>
            </Card>
          ))}
      </div>
    </>
  );
}

export default Blog;
