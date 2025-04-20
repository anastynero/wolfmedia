"use client"

import styles from "./Info.module.css";
import Image from 'next/image';
import {image1, image2, image3, image4} from "./../../images"
import { useState } from "react";
import React from "react";

export default function Info(){
    const images = [
        {url: image1, title: "Изображение 1"},
        {url: image2, title: "Изображение 2"},
        {url: image3, title: "Изображение 3"},
        {url: image4, title: "Изображение 4"},
    ];
    const items = [
        {
          id: 0,
          text: [
            { id: 0, text: <span>50 штатных специалистов</span> },
            { id: 1, text: " по SMM" },
          ],
        },
        {
          id: 1,
          text: [
            { id: 0, text: "Производят " },
            { id: 1, text: <span>контент</span> },
            { id: 2, text: " в соответствии с " },
            { id: 3, text: <span>редполитикой</span> },
            { id: 4, text: " по SMM" },
          ],
        },
        {
          id: 2,
          text: [
            { id: 0, text: "Ежедневно выпускают " },
            { id: 1, text: <span>2000 постов и 162 видео</span> },
          ],
        },
        {
          id: 3,
          text: [
            { id: 0, text: "Все материалы проходят внешнюю " },
            { id: 1, text: <span>проверку на уникальность</span> },
          ],
        },
        {
          id: 4,
          text: [
            { id: 0, text: "Собственный софт собирает " },
            { id: 1, text: <span>полную статистику</span> },
            { id: 2, text: " по активности сооществ и качеству контента" },
          ],
        },
        {
          id: 5,
          text: [
            { id: 0, text: "Арт-директор следит за соблюдением " },
            { id: 1, text: <span>стилистики группы</span> },
          ],
        },
      ];
    const [activeImage, setActiveImage] = useState(images[0]);
    return(
        <section className={styles.info}>
            <h2 className={styles.h2}>КАК МЫ РАБОТАЕМ</h2>
            <div className={styles.wrapper}>
            <ul className={styles.items}>
                {items.map((item) => (
              <li className={styles.item} key={item.id}>
                <p key={"item-p" + item.id}>{item.text.map(textItem => (
                  <React.Fragment key={`p-inner-list-${item.id}-${textItem.id}`}>
                    {textItem.text}
                  </React.Fragment>
                ))}</p>
              </li>
            ))}
          </ul>
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