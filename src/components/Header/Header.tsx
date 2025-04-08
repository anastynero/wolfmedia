import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css'
import logo from "./../../../public/img/logo_light.svg";
import telephone from "./../../../public/img/telephone.svg"
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Header(){
    return(
        <header className={styles.header}>
          <section className={styles["left-block"]}>
            <Link href='/'>
            <Image
                src={logo}
                alt="Логотип"
                width={286}
                height={70}
                className={styles.image}
            />
            </Link>
            <Navbar/>
          </section>
          <section className={styles["right-block"]}>
            <SocialMedia/>
            <div className={styles.contacts}>
              <Image
              src={telephone}
              alt="Телефон"
              width={24}
              height={24}
              className={styles.image}
              />
              <h5 className={styles.telephone}>+7 495 257 55 65</h5>
            </div>
            <button className={styles.button}>Написать нам</button>
          </section>
        </header>
    );
}