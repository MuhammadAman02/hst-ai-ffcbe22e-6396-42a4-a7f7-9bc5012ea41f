import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-6">
        <h1 className="text-6xl font-bold text-white">
          Hello World
        </h1>
        <p className="text-xl text-white">
          Welcome to this simple and beautiful page.
        </p>
      </main>
    </div>
  )
}