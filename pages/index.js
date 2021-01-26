import 'next/link';
import Link from 'next/link';
import Head from 'next/head';
function Home() {
    return (
        <div>
            <Head>
                <title>Sobre</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Home</h1>
        <Link href="/sobre">
            <a>Sobre</a>
        </Link>
        </div>
    )
}

export default Home