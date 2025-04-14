import styles from './CommunityAutomation.module.css'
import {hearts, virus, chart, stars, chronometr, start, repair, services, youtube} from '@/images'
import Image from 'next/image';
import Button from '../Button/Button';

export default function CommunityAutomation(){
    const items = [
        {icon: chart, text: 'Даёт доступ к', accent: 'детальной статистике,', 
            continuation: 'как одной группы, так и всех сообществ вместе'},
        {icon: hearts, text: 'Выявляет наиболее', accent: 'популярные посты', 
            continuation: ''},
        {icon: stars, text: 'Позволяет оценивать', accent: 'качество контента', 
            continuation: 'и следить за авторами постов'},
        {icon: virus, text: 'Сообщает об', accent: 'ошибках', 
            continuation: ''},
    ];

    const servicesItems = [
        {icon: start, text: 'Контент и развитие'},
        {icon: repair, text: 'Управление и монетизация'},
        {icon: chronometr, text: 'Аренда сообществ'}
    ]
    return(
        <section className={styles["community-automation"]}>
            <h2>МЫ ПОЛНОСТЬЮ АВТОМАТИЗИРОВАЛИ
            РАБОТУ ПО УПРАВЛЕНИЮ СООБЩЕСТВАМИ</h2>
            <p>Чем больше сообществ в активе, тем больше времени требуется на планирование, ведение и сбор статистики.</p>
            <h4>Мы подошли к решению этой проблемы технологично - разработали собственный софт, который:</h4>
            <div className={styles.wrapper}>
                {items.map((items, index) => (
                    <article key={index} className={styles.item}>
                        <div className={styles["image-block"]}>
                        <Image
                        src={items.icon}
                        alt='Иконка'
                        className={styles.image}
                        />
                        </div>
                            <h5 className={styles.text}>{items.text} <span className={styles.span}> {items.accent} </span> {items.continuation}</h5>
                    </article>
                ))}
            </div>
        <section className={styles.services}>
            <div className="first-block">
                <h4>Услуги для администраторов</h4>
                <div className={styles["services-wrapper"]}>
                {servicesItems.map((items, index) => (
                    <article key={index} className={styles["services-item"]}>
                        <Image
                        src={items.icon}
                        alt='Иконка'
                        className={styles["services-icon"]}
                        />
                    <h5 className={styles["services-text"]}>{items.text}</h5>
                    </article>
                ))}
                </div>
                </div>
                <Button className={styles.button}>ПОДРОБНЕЕ</Button>
                <figure className={styles.video}>
                    <Image
                        src={services}
                        alt='Услуги'
                        className={styles["services-image"]} 

                    />
                    <Image
                        src={youtube}
                        alt='YouTube'
                        className={styles["image-icon"]}
                    />
                </figure>
        </section>
        </section>
    )
}