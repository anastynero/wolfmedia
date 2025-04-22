"use client"

import styles from './Cases.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import { htmlToText } from 'html-to-text';
import { CaseItem } from '@/store/casesSlice';
import Link from 'next/link';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';

export default function Cases({ initialData }: { initialData?: CaseItem[] }) {
    const dispatch = useAppDispatch()
    const { items, status, error, offset, hasMore } = useSelector((state: RootState) => state.cases)
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
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
    }, [dispatch, initialData, status, items]);

    const loadMore = () => {
        if(hasMore){
            dispatch(fetchProducts(offset));
        }
    }

    const handleToggleFavorite = (slug: string) => {
        if (favoriteSlugs.includes(slug)) {
            dispatch(removeFavorite(slug)); 
        } else {
            dispatch(addFavorite(slug)); 
        }
        console.log(favoriteSlugs)
    }

    return (
        <section className="cases">
            <h2 className={styles.h2}>НАШИ РАБОТЫ</h2>

            {status === 'loading' && <p>Загрузка...</p>}
            {status === 'failed' && <p>Ошибка: {error}</p>}

            <section className={styles["cases-items"]}>
                {items.map((item: CaseItem) => {
                    const tagsArray = parseTags(item.tagsDisplayed) 
                    const isFavorite = favoriteSlugs.includes(item.slug); 
                    
                    return (
                        <Link href={`/cases/${item.slug}`} key={item.slug}>
                            <article className={styles.item}>
                                <div className={styles.wrapper}>
                                <h5 className={styles.h5}>{htmlToText(item.title)}</h5>
                                <button 
                                    className={styles.button1} 
                                    onClick={(e) => {
                                        e.preventDefault(); 
                                        handleToggleFavorite(item.slug); 
                                    }}
                                >
                                    <svg 
                                        className={`${styles.star} ${isFavorite ? styles.starFavorited : ''}`}
                                        viewBox="0 0 50 50"
                                        width={50}
                                        height={50}
                                    >
                                        <path
                                            className={styles.stroke}
                                            d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 
                                            0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 
                                            0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 
                                            6.822-6.665a.845.845 0 00.214-.869z"
                                        />
                                        <path
                                            className={styles.fill}
                                            d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 
                                            00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 
                                            9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 
                                            6.822-6.665a.845.845 0 00.214-.869z"
                                        />
                                    </svg>
                                </button>
                                </div>
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
