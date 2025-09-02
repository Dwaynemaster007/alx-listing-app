import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to ALX Listing App</h1>
        <p className="text-lg mt-4">Project setup is complete. Start building your components!</p>
      </main>
    </>
  );
};

export default HomePage;
