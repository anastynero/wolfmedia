"use client"

import Button from '../Button/Button'
import styles from './Cases.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import { htmlToText } from 'html-to-text';

export default function Cases(){
    const dispatch = useAppDispatch();
    const { items, status, error } = useSelector((state: RootState) => state.cases);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchProducts());
        }
    }, [dispatch, status]);
    return(
        <section className="cases">
            <h2 className={styles.h2}>НАШИ РАБОТЫ</h2>

            {status === 'loading' && <p>Загрузка...</p>}
            {status === 'failed' && <p>Ошибка: {error}</p>}

            <section className={styles["cases-items"]}>
                {items.map((item) => (
                    <article key={item.slug} className={styles.item}>
                        <h5 className={styles.h5}>{htmlToText(item.title)}</h5>
                        <img
                        src={item.poster.image.src}
                        alt={item.title}
                        className={styles.image}
                        width={400}
                        height={300}
                        />
                    </article>
                
                ))}
            </section>
            
            <Button className={styles.button}>ЗАГРУЗИТЬ ЕЩЕ</Button>
        </section>
    )
}