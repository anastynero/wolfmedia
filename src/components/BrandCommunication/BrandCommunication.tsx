import Button from '../Button/Button';
import styles from './BrandCommunication.module.css';
import {content, eye, tracking} from './../../images';
import Image from 'next/image';

export default function BrandCommunication() {
    const items = [
        {src: content, text: "Создаем контент"},
        {src: eye, text: "Размещаем нативную рекламу"},
        {src: tracking, text: "Разрабатываем нативные спецпроекты"},
    ]
    return(
        <section className={styles["brand-communication"]}>
            <h2>ПОМОГАЕМ БРЕНДАМ НАЛАДИТЬ
            КОММУНИКАЦИЮ С АУДИТОРИЕЙ</h2>
            <p>Социальные сети - идеальная площадка для размещения нативной рекламы, 
                она встраивается в ленту пользователя, вызывает большее доверие у аудитории, 
                обходит блокировщики рекламы, и органически набирает огромные охваты.</p>
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                <article className={styles.item} key={index}>
                    <div className={styles.image}>
                    <Image
                    src={item.src}
                    alt='Иконка'
                    className={styles.icon}
                    />
                    </div>
                    <div className={styles.text}>
                    <h4>{item.text}</h4>
                    </div>
                </article>
                ))}
            </div>
            <Button className={styles.button}>РЕКЛАМНОЕ СОТРУДНИЧЕСТВО</Button>
        </section>
    )
}