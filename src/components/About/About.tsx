import styles from './About.module.css';
import image from "./../../../public/img/about-image.svg";
import imagemob from "./../../../public/img/about-image-mob.svg";
import Image from 'next/image';
import Button from '../Button/Button';

export default function About(){
    return(
        <section className={styles.about}>
            <h2 className={styles.h2}>О нас</h2>
            <div className={styles.wrapper}>
                <p className={styles.text}>«Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей.
Социальные сети стали главным инструменом коммуникации в 21 веке. Сообщества, паблики,
youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их охват превышает
охват популярных телеканалов и журналов. 
И пока традиционные СМИ занимаются перетаскивание аудитории с одной площадки на
другую, мы идем прямо к читателю, в его новостную
ленту. </p>
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