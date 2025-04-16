"use client"

import styles from './Cases.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import { htmlToText } from 'html-to-text';
import { CaseItem } from '@/store/casesSlice';
import Link from 'next/link';


export default function Cases({ initialData }: { initialData?: CaseItem[] }) {
    const dispatch = useAppDispatch()
    const { items, status, error, offset, hasMore } = useSelector((state: RootState) => state.cases)

    const parseTags = (tagsString: string) => {
        if (!tagsString) return []
        return tagsString.split(', ').map(tag => tag.trim())
    }

    useEffect(() => {
        if (initialData && items.length === 0) {
            dispatch({ type: 'cases/initialize', payload: initialData });
          }

        if (status === 'idle') {
            dispatch(fetchProducts(0))
        }
    }, [dispatch, initialData])

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
                        <Link href={`/cases/${item.slug}`} key={item.slug}>
                        <article className={styles.item}>
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
                                        <li key={index} className={styles.tag}>{htmlToText(tag)}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                        </Link>
                    )
                })}
            </section>
            {hasMore && <button className={styles.button} onClick={loadMore}>ЗАГРУЗИТЬ ЕЩЕ</button>}
        </section>
    )
}