"use client"

import Button from '../Button/Button'
import styles from './Cases.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import { htmlToText } from 'html-to-text';
import { CaseItem } from '@/store/casesSlice';


export default function Cases() {
    const dispatch = useAppDispatch()
    const { items, status, error, offset, hasMore } = useSelector((state: RootState) => state.cases)

    const parseTags = (tagsString: string) => {
        if (!tagsString) return []
        return tagsString.split(', ').map(tag => tag.trim())
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts(1))
        }
    }, [dispatch, status])

    const loadMore = () => {
        if(hasMore){
            dispatch(fetchProducts(offset));
        }
    }

    return (
        <section className="cases">
            <h2 className={styles.h2}>НАШИ РАБОТЫ</h2>

            {status === 'loading' && <p>Загрузка...</p>}
            {status === 'failed' && <p>Ошибка: {error}</p>}

            <section className={styles["cases-items"]}>
                {items.map((item: CaseItem) => {
                    const tagsArray = parseTags(item.tagsDisplayed) 
                    
                    return (
                        <article key={item.slug} className={styles.item}>
                            <h5 className={styles.h5}>{htmlToText(item.title)}</h5>
                            <img
                                src={item.poster.image.src}
                                alt={item.title}
                                className={styles.image}
                                width={400}
                                height={300}
                            />
                            {tagsArray.length > 0 && (
                                <ul className={styles.tags}>
                                    {tagsArray.map((tag, index) => (
                                        <li key={index} className={styles.tag}>{tag}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    )
                })}
            </section>
            {hasMore && <button className={styles.button} onClick={loadMore}>ЗАГРУЗИТЬ ЕЩЕ</button>}
        </section>
    )
}