import styles from '../styles/Home.module.css'
import Gallery from '../components/gallery'


export default function Home() {
    return (
        <div>
            <main className={styles.main}>
                <div className="text-4 underline mb-14">
                    Task for TechGuilds
        </div>
                <Gallery />



            </main>
        </div>
    )
}