import Head from 'next/head';

export default function Home() {
  return (
    <div className='px-8'>
      <Head>
        <title>Home · Sergio Escosa</title>
        <meta name="description" content="Sergio Escosa personal website" />
      </Head>

      <main className='min-h-screen py-16 flex flex-col items-center justify-center'>
        <h1 className='text-blue-600 text-6xl font-bold'>
          Howdy, I'm Sergio!
        </h1>

        <p className='text-center my-16 text-xl'>
          work in progress
        </p>

      </main>
    </div>
  )
}