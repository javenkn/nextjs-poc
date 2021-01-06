import Head from "next/head";
import faker from "faker";
import Card from "../components/Card";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="m-auto mt-4 p-8 flex flex-col justify-center items-center w-3/4">
        <h1 className="my-4 self-start">Director | Rock Star</h1>
        <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
          <Card
            className="col-span-full"
            title={faker.name.firstName()}
            description={faker.commerce.productDescription()}
          />
        </div>
        <h1 className="my-4 self-start">Track Leaders</h1>
        <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
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
        <div className="grid grid-cols-3 gap-4 justify-items-center w-full">
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
        <h1 className="my-4 self-start">Blogs</h1>
        <Card
          title={faker.name.firstName()}
          description={faker.commerce.productDescription()}
        >
          <button className="button-link">Read more</button>
        </Card>
        <div className="grid grid-cols-2 gap-4 justify-items-center w-full mt-4">
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
        <div className="grid grid-cols-3 gap-4 justify-items-center w-full mt-2">
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
        <h1 className="my-4 self-start">Blogs</h1>
        <Card
          title={faker.name.firstName()}
          description={faker.commerce.productDescription()}
        >
          <button className="button-link px-8">View</button>
        </Card>
        <div className="grid grid-cols-2 gap-4 justify-items-center w-full mt-4">
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <Card
                key={i}
                title={faker.name.firstName()}
                description={faker.commerce.productDescription()}
              >
                <button className="button-link px-8">View</button>
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center w-full mt-4">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Card
                key={i}
                title={faker.name.firstName()}
                description={faker.commerce.productDescription()}
              >
                <button className="button-link px-8">View</button>
              </Card>
            ))}
        </div>
      </main>
    </div>
  );
}
