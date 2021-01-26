import 'next/link';
import Link from 'next/link';
import Head from 'next/head';

function Sobre() {
    return (
        <div>
            <Head>
                <title>Sobre</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Sobre</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
        </div>
    )
}

export default Sobre