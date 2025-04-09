import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css'
import logo from "./../../../public/img/logo_light.svg";
import telephone from "./../../../public/img/telephone.svg"
import SocialMedia from '../SocialMedia/SocialMedia';
import logo2 from "./../../../public/img/logo-mini.svg";
import mail from "./../../../public/img/mail.svg";
import burger from "./../../../public/img/burger.svg";

export default function Header(){
    return(
        <header className={styles.header}>
          <section className={styles["left-block"]}>
          <Image
                src={burger}
                alt="Бургер-меню"
                width={24}
                height={16}
                className={styles.burger}
            />
            <section className="logo">
            <Link href='/'>
            <Image
                src={logo}
                alt="Логотип"
                width={286}
                height={70}
                className={styles.logo}
            />
            </Link>
            <Link href='/'>
            <Image
                src={logo2}
                alt="Логотип"
                width={286}
                height={70}
                className={styles["logo-mini"]}
            />
            </Link>
            </section>
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
              className={styles["telephone-icon"]}
              />
              <h5 className={styles.telephone}>+7 495 257 55 65</h5>
            </div>
            <button className={styles.button}>
            <span className={styles.text}>Написать нам</span>
            <Image 
            src={mail}
            alt="Написать нам"
            width={24}
            height={24}
            className={styles.icon} />
            </button>
          </section>
        </header>
    );
}