import styles from './Hero.module.css';
import Image from 'next/image';
import vector from "./../../../public/img/Vector.svg";
import backgroundImage from "./../../../public/img/background.jpg"

export default function Hero(){
    return(
        <section className={styles.hero}>
            <h1 className={styles.h1}>ИЗДАТЕЛЬСТВО НОВЫХ МЕДИА</h1>
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
            <div className={styles["bg-container"]}>
                <Image
                  src={backgroundImage}
                  alt="Фоновое изображение"
                  fill
                  priority
                  quality={100}
                  className={styles.background}
                />
            </div>
        </section>
    );
}