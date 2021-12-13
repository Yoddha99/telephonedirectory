import Link from 'next/link'
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
const NotFound = () => {

    const router = useRouter();

    useEffect(()=> {
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    }, []);

    return (
        <>
            <Head>
                <title>Tel Dir | 404</title>
            </Head>    
            <div className="not-found">
                <h1>Such Empty, much wow!~~</h1>
                <Link href="/"><a>Go back to homepage</a></Link>
            </div>
        </>
    );
}
 
export default NotFound;