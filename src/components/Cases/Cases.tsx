"use client"

import styles from './Cases.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import { htmlToText } from 'html-to-text';
import { CaseItem } from '@/store/casesSlice';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';
import Case from '../Case/Case';

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
    }

    return (
        <section className="cases">
            <h2 className={styles.h2}>НАШИ РАБОТЫ</h2>

            {status === 'loading' && <p>Загрузка...</p>}
            {status === 'failed' && <p>Ошибка: {error}</p>}

            <section className={styles["cases-items"]}>
                {items.map((item: CaseItem) => {
                    const isFavorite = favoriteSlugs.includes(item.slug); 
                    return (
                        <Case
                            key={item.slug}
                            data={item}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    )
                })}
            </section>
            {hasMore && <button className={styles.button} onClick={loadMore}>ЗАГРУЗИТЬ ЕЩЕ</button>}
        </section>
    )
}
