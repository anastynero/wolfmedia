import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar(){
    const menuItems = [
        {title: "О НАС", href:"/"},
        {title: "ПОРТФОЛИО", href:"/"},
        {title: "УСЛУГИ", href:"/"},
        {title: "КОНТАКТЫ", href:"/"}
    ];

    return(
        <nav className={styles.navigation}>
            {menuItems.map((item, index) =>(
            <Link key={index} href={item.href} className={styles["navigation-item"]}>{item.title}</Link>
        ))}
        </nav>
    );
}