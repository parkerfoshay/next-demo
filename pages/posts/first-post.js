import Head from 'next/head'
import Link from "next/link";
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>First post</title>
    </Head>
      <h1>First post</h1>
      <Link href="/">
        <a><h2>back home</h2></a>
      </Link>
    </Layout>
  );
}
