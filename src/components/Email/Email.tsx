import styles from './Email.module.css';
import {back} from '@/images';
import Image from 'next/image';

export default function Email(){
    return(
        <article className={styles.email}>
            <Image
                src={back}
                alt='Иконка'
                className={styles.icon}
            />
            <p className={styles["email-text"]}>aa@wolfmedia.team</p>
        </article>
    )
}