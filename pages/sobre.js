import 'next/link';
import Link from 'next/link';
import Head from 'next/head';

function Sobre({ stars }) {
    return (
        <div>
            <Head>
                <title>Sobre</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Sobre</h1>
            <p>{stars}</p>
        <Link href="/">
            <a>Home</a>
        </Link>

        <h2>Well é corno!!</h2>
        </div>
    )
}

Sobre.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

export default Sobre