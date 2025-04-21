"use client"

import styles from './Cases.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import { htmlToText } from 'html-to-text';
import { CaseItem } from '@/store/casesSlice';
import Link from 'next/link';
import Image from 'next/image';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';
import { favorites, favoritesActive } from './../../images'
import Cookies from 'js-cookie';


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
    }, [dispatch, initialData])

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
                            <button className={styles.button1} onClick={(e) => {
                                        e.preventDefault(); 
                                        handleToggleFavorite(item.slug);
                                    }}>
                <Image 
                    src={isFavorite ? favoritesActive : favorites} 
                    alt="" 
                    className={styles.icon}
                    width={50}
                    height={50}
                />
            </button>
                        </article>
                        </Link>
                    )
                })}
            </section>
            {hasMore && <button className={styles.button} onClick={loadMore}>ЗАГРУЗИТЬ ЕЩЕ</button>}
        </section>
    )
}