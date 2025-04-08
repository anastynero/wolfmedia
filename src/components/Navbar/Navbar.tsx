import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navigation}>
            <Link href="/">О нас</Link>
            <Link href="/">Портфолио</Link>
            <Link href="/">Услуги</Link>
            <Link href="/">Контакты</Link>
        </nav>
    );
}