import Head from 'next/head'
import Dashboard from '../components/Dashboard'
export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>kisaan AI</title>
        <meta name="description" content="kisaan AI" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Nunito:wght@500&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Dashboard />
    </div>
  )
}
