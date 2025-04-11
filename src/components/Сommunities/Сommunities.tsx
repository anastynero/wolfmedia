import styles from './Communities.module.css';
import Image from 'next/image';
import {chef, football, brain, animal, baby, woman, humor, drawing, airplane, tooltip1, tooltip2, tooltip3} from './../../images';

export default function Communities(){
    const communities = [
        {icon: chef, title: "КУЛИНАРИЯ"},
        {icon: humor, title: "ЮМОР"},
        {icon: animal, title: "ЖИВОТНЫЕ"},
        {icon: airplane, title: "ПУТЕШЕСТВИЯ"},
        {icon: football, title: "СПОРТ"},
        {icon: woman, title: "ДЛЯ ЖЕНЩИН"},
        {icon: drawing, title: "ДИЗАЙН"},
        {icon: brain, title: "ПОЗНАВАТЕЛЬНО"},
        {icon: baby, title: "МАТЕРИНСТВО"}
    ];
    const tooltipItems = [
        {img: tooltip1, text: "Дай лапу"},
        {img: tooltip2, text: "Пушистые лапки"},
        {img: tooltip3, text: "Мокрый нос"}
    ]
    return(
        <section className={styles.communities}>
            <h2 className={styles.h2}>БОЛЕЕ 150 ТЕМАТИЧЕСКИХ СООБЩЕСТВ</h2>
            <div className={styles.wrapper}>
                {communities.map((item, index) => (
                    <article key={index} className={styles.community}>
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={100}
                        height={100}
                        className={styles.image}
                    />
                    <h3 className={styles.h3}>{item.title}</h3>
                    <ul className={styles.tooltip} role="tooltip">
                        {tooltipItems.map((item, index) => (
                        <li key={index}>
                            <Image
                            src={item.img}
                            alt={item.text}
                            className={styles["tooltip-image"]}
                            />
                            <p className={styles["tooltip-text"]}>{item.text}</p>
                    </li>
                ))}
            </ul>
                </article>
                ))}
            </div>
            <h4 className={styles.text}>Присутствуем на всех популярных платформах</h4> 
        </section>
    )
}