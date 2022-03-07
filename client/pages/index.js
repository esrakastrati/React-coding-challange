import styles from '../styles/Home.module.css'
import Gallery from '../components/gallery'


export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.header}> Task for TechGuilds </h1>
            <Gallery />



        </main>
    )
}