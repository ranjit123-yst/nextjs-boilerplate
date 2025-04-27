import Head from 'next/head'

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Page is under construction. Coming soon!" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <main className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 hover:text-gray-700 transition-colors">
            Coming Soon
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-2 hover:bg-gray-700 transition-colors" />
        </main>
      </div>
    </>
  )
}
