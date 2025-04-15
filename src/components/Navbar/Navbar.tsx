import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar(){
    const menuItems = [
        {title: "О НАС", href:"/#about"},
        {title: "ПОРТФОЛИО", href:"/cases"},
        {title: "УСЛУГИ", href:"/#services"},
        {title: "КОНТАКТЫ", href:"/#contacts"}
    ];

    return(
        <nav className={styles.navigation}>
            {menuItems.map((item, index) =>(
            <Link key={index} href={item.href} className={styles["navigation-item"]}>{item.title}</Link>
        ))}
        </nav>
    );
}