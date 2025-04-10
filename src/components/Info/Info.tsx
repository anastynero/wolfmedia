import styles from "./Info.module.css";
import Image from 'next/image';

export default function Info(){
    return(
        <section className={styles.info}>
            <h2>Как мы работаем</h2>
            <div className={styles.wrapper}>
                <article className={styles.items}>
                    <p className={styles.item}><span className={styles.span}>50 штатных 
                    специалистов </span>по SMM</p>
                    <p className={styles.item}>Производят <span className={styles.span}>контент</span> в
                    соответствии с <span className={styles.span}>редполитикой</span></p>
                    <p className={styles.item}>Ежедневно выпускают <span className={styles.span}>2000
                    постов и 162 видео</span></p>
                    <p className={styles.item}>Все материалы проходят внешнюю 
                    <span className={styles.span}> проверку на уникальность</span></p>
                    <p className={styles.item}>Собственный софт собирает
                        <span className={styles.span}> полную статистику</span> по активности
                        сооществ и качеству контента</p>
                    <p className={styles.item}>Арт-директор следит за
                    соблюдением <span className={styles.span}>стилистики группы</span></p>
                </article>
                <article className={styles.gallery}>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}