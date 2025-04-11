import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css'
import SocialMedia from '../SocialMedia/SocialMedia';
import {logomini, telephone, footerlogo} from './../../images';
import clsx from 'clsx';

export default function Footer(){
    return(
        <footer className={styles.container}>
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
                src={footerlogo}
                alt="Логотип"
                width={208}
                height={51}
                className={styles['logo']}
                />
                </Link>
            </section>
            <div className={styles.copyright}>
                <p>Copyright 2019&nbsp;&copy; All rights reserved.</p>
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