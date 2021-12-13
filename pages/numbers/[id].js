import Head from 'next/head';
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const res = await await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(number => {
        return {
            params: { id: number.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {number: data}
    }
}

const Details = ({ number }) => {
    return (
        <>
            <Head>
                <title>Tel Dir | User Details</title>
            </Head>
            <div>
                <h1>{ number.name }</h1>
                <p className={styles.text}>Phone: { number.phone.split(' ')[0] }</p>
                <p className={styles.text}>Email: { number.email }</p>
                <p className={styles.text}>Website: { number.website }</p>
                <p className={styles.text}>City: { number.address.city }</p>
            </div>
        </>
    );
}
 
export default Details;