import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css'
import logo from '../../../public/img/footer-logo.svg'
import SocialMedia from '../SocialMedia/SocialMedia';
import telephone from "./../../../public/img/telephone-footer.svg";
import logomini from "./../../../public/img/footer-logo-mini.svg";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <section className="left-block">
            <Link href="/">
                <Image
                src={logomini}
                alt="Логотип"
                width={51}
                height={51}
                className={styles['logo-mini']}
                />
                </Link>
                <Link href="/">
                <Image
                src={logo}
                alt="Логотип"
                width={208}
                height={51}
                className={styles['logo']}
                />
                </Link>
            </section>
            <div className={styles.copyright}>
                <p>Copyright 2019 (c) All rights reserved.</p>
            </div>
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
            </section>
        </footer>
    );
}