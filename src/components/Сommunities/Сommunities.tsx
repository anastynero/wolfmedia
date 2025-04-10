import styles from './Communities.module.css';
import Image from 'next/image';
import {chef, football, brain, animal, baby, woman, humor, drawing, airplane} from './../../images';

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
                </article>
                ))}
            </div>
            <h4 className={styles.text}>Присутствуем на всех популярных платформах</h4> 
        </section>
    )
}