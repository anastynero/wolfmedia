import styles from './Contacts.module.css';
import {contacts1, contacts2, back} from '@/images';
import Image from 'next/image';
import Email from '../Email/Email';

export default function Contacts(){
    return(
        <section className={styles.contacts}>
            <h2>Есть вопрос или предложение?</h2>
            <h4>Напиши нам!</h4>
            <div className={styles.wrapper}>
                <article className={styles["first-block"]}>
                    <figure className={styles.item}>
                        <Image
                        src={contacts1}
                        alt='Фото из раздела Контакты'
                        className={styles.image}
                        />
                        <Email/>
                        </figure>
                        <figure className={styles.item}>
                        <Image
                        src={contacts2}
                        alt='Фото из раздела Контакты'
                        className={styles.image}
                        />
                        <Email/>
                        </figure>
                </article>
                <article className={styles["second-block"]}>
                    <div className={styles["contacts-block"]}>
                        <Email/>
                        <p className={styles.text}>
                        по вопросам размещения рекламы
                        и рекламных спецпроектов
                        </p>
                    </div>
                    <div className={styles["contacts-block"]}>
                        <Email/>
                        <p className={styles.text}>по вопросам администрирования сообществ</p>
                    </div>
                    <div className={styles["contacts-block"]}>
                        <Email/>
                        <p className={styles.text}>по любым другим вопросам</p>
                    </div>
                </article>
            </div>
        </section>
    )
}