import styles from '../../styles/number.module.css'
import Link from 'next/link'
import Head from 'next/head';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {numbers: data}
    }
}

const Numbers = ({ numbers }) => {
    return (
        <>
            <Head>
                <title>Tel Dir | Telephone Numbers</title>
            </Head>
            <div>
                <h1>Telephone Numbers</h1>
                {numbers.map(number => (
                    <Link href={'/numbers/'+number.id} key={number.id}>
                        <a className={styles.single}><h3>{`${number.name}:\t ${number.phone.split(' ')[0]}`}</h3></a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default Numbers;