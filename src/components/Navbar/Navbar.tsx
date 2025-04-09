import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navigation}>
            <Link href="/" className={styles["navigation-item"]}>О НАС</Link>
            <Link href="/" className={styles["navigation-item"]}>ПОРТФОЛИО</Link>
            <Link href="/" className={styles["navigation-item"]}>УСЛУГИ</Link>
            <Link href="/" className={styles["navigation-item"]}>КОНТАКТЫ</Link>
        </nav>
    );
}