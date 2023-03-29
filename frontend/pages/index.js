import Head from 'next/head'
import Dashboard from '../components/Dashboard'
export default function Home() {
  return (
    <div>
      <Head>
        <title>kisaan AI</title>
        <meta name="description" content="kisaan AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  )
}
