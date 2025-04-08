import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css'
import logo from "./../../../public/img/logo_light.svg";
import vk from "./../../../public/img/vk.svg";
import ok from "./../../../public/img/ok.svg";
import facebook from "./../../../public/img/facebook.svg";
import twitter from "./../../../public/img/twitter.svg";
import telephone from "./../../../public/img/telephone.svg"

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
            <div className={styles["social-media"]}>
                <Link href='/'>
                <Image
                src={vk}
                alt="Вконтакте"
                width={24}
                height={24}
                className={styles.image}
                />
                </Link>
                <Link href='/'>
                <Image
                src={ok}
                alt="Одноклассники"
                width={24}
                height={24}
                className={styles.image}
                />
                </Link>
                <Link href='/'>
                <Image
                src={facebook}
                alt="Фейсбук"
                width={24}
                height={24}
                className={styles.image}
                />
                </Link>
                <Link href='/'>
                <Image
                src={twitter}
                alt="Твиттер"
                width={24}
                height={24}
                className={styles.image}
                />
                </Link>
            </div>
            <div className={styles.contacts}>
              <Image
              src={telephone}
              alt="Телефон"
              width={24}
              height={24}
              className={styles.image}
              />
              <p>+7 495 257 55 65</p>
            </div>
            <button className={styles.button}>Написать нам</button>
          </section>
        </header>
    );
}