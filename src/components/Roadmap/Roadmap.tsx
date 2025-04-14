import styles from './Roadmap.module.css';
import roadmap from './../../../public/img/roadmap.svg';
import Image from 'next/image';

export default function Roadmap(){
    return(
        <article className={styles.wrapper}>
            <div className={styles.left1}>2014</div>
            <div className={styles.left2}>2015</div>
            <div className={styles.left3}>2016</div>
            <div className={styles.left4}>2017</div>
            <div className={styles.left5}>2018</div>
            <div className={styles.left6}>2019</div>
            <Image
            src={roadmap}
            alt="Дорожная карта"
            className={styles.roadmap}
            />
            <div className={styles.right1}>С 1 паблика выросли до сетки из 50 сообществ</div>
            <div className={styles.right2}>Первый миллион подписчиков</div>
            <div className={styles.right3}>Активный рост сообществ и аудитории</div>
            <div className={styles.right4}>Открытие собственного офиса, переход 
                от виртуальной команды к реальной, 
                запуск видео-продакшена</div>
            <div className={styles.right5}>Разработан собственный софт по сбору детальной статистики</div>
            <div className={styles.right6}>Агрегация сообществ под
        управление WolfMedia</div>
    </article>
    )
}