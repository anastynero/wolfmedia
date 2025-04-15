import styles from './About.module.css';
import image from "./../../../public/img/about-image.svg";
import imagemob from "./../../../public/img/about-image-mob.svg";
import Image from 'next/image';
import Button from '../Button/Button';

export default function About(){
    return(
        <section className={styles.about} id='about'>
            <h2 className={styles.h2}>О НАС</h2>
            <div className={styles.wrapper}>
                <p className={styles.text}>&laquo;Wolfmedia&raquo;&nbsp;&mdash; это редакция, 
                    где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и&nbsp;доносят 
                    его до&nbsp;огромной аудитории с&nbsp;помощью социальных сетей.
                <br /><br />
                Социальные сети стали главным инструменом коммуникации в&nbsp;21&nbsp;веке. Сообщества, паблики,
                youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их&nbsp;охват превышает
                охват популярных телеканалов и&nbsp;журналов. 
                <br /><br />
                И&nbsp;пока традиционные СМИ занимаются перетаскивание аудитории с&nbsp;одной площадки на
                другую, мы&nbsp;идем прямо к&nbsp;читателю, в&nbsp;его новостную
                ленту.</p>
            <Image
                src={image}
                alt="Временная линия"
                width={517}
                height={375}
                className={styles.image}
            />
            <Image
                src={imagemob}
                alt="Временная линия"
                width={290}
                height={433}
                className={styles["image-mob"]}
            />
                <Button className={styles.button}>ПОДРОБНЕЕ</Button>
            </div>
        </section>
    )
}