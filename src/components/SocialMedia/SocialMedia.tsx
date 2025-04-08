import styles from './SocialMedia.module.css';
import Link from 'next/link';
import Image from 'next/image';
import vk from "./../../../public/img/vk.svg";
import ok from "./../../../public/img/ok.svg";
import facebook from "./../../../public/img/facebook.svg";
import twitter from "./../../../public/img/twitter.svg";

export default function SocialMedia(){
    return(
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
    );
}