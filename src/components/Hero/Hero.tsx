import styles from './Hero.module.css';
import Image from 'next/image';
import vector from "./../../../public/img/Vector.svg";

export default function Hero(){
    return(
        <section className={styles.hero}>
            <h1 className={styles.h1}>Издательство
            новых медиа</h1>
            <div className={styles.wrapper}>
            <div className={styles.block}>
                <h2 className={styles.h2}>100 000 000</h2>
                <p className={styles.text}>НАША АУДИТОРИЯ</p>
            </div>
            <div className={styles.block}>
                <h2 className={styles.h2}>12 000 000</h2>
                <p className={styles.text}>ЕЖЕДНЕВНО НАС ЧИТАЮТ</p>
            </div>
            </div>
            <Image
                src={vector}
                alt="Стрелка вниз"
                width={24}
                height={24}
                className={styles.vector}
            />
        </section>
    );
}