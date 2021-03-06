import Head from "next/head";
import faker from "faker";
import Card from "../components/Card";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card
        title={faker.name.firstName()}
        description={faker.commerce.productDescription()}
      >
        <button className="button-link px-8">View</button>
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
              <button className="button-link px-8">View</button>
            </Card>
          ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center w-full mt-4">
        {Array(3)
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
    </>
  );
}
