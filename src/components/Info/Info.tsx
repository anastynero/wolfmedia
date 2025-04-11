"use client"

import styles from "./Info.module.css";
import Image from 'next/image';
import {image1, image2, image3, image4} from "./../../images"
import { useState } from "react";

export default function Info(){
    const images = [
        {url: image1, title: "Изображение 1"},
        {url: image2, title: "Изображение 2"},
        {url: image3, title: "Изображение 3"},
        {url: image4, title: "Изображение 4"},
    ]
    const [activeImage, setActiveImage] = useState(images[0]);
    return(
        <section className={styles.info}>
            <h2 className={styles.h2}>КАК МЫ РАБОТАЕМ</h2>
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
                    <div className={styles.activeImage}>
                    <Image
                      src={activeImage.url}
                      alt={activeImage.title}
                      className={styles["active-image"]}
                    />
                    </div>
                    <ul className={styles.images}>
                        {images.map((image, index) => (
                            <li key={index} onClick={() => setActiveImage(image)}>
                            <Image
                            src={image.url}
                            alt={image.title}
                            className={`${styles["gallery-image"]} ${
                                image.url === activeImage.url ? styles.active : ''
                              }`}
                            />
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    )
}