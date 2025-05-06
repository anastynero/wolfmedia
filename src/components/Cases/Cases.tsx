"use client"

import styles from './Cases.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts, resetCases } from '@/store/casesSlice';
import { CaseItem } from '@/store/casesSlice';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';
import Case from '../Case/Case';

const CATEGORIES = {
    'Все': null,
    'Дизайн': 'design',
    'Аналитика': 'analytics',
    'Разработка': 'development',
    'Креатив': 'creative'
  };

export default function Cases({ initialData }: { initialData?: CaseItem[] }) {
    const dispatch = useAppDispatch()
    const { items, status, error, offset, hasMore } = useSelector((state: RootState) => state.cases)
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    const [activeCategory, setActiveCategory] = useState<keyof typeof CATEGORIES>('Все');

    useEffect(() => {
        if (initialData && initialData.length > 0 && items.length === 0 && activeCategory === 'Все') {
          dispatch({ type: 'cases/initialize', payload: initialData });
        }
      }, [dispatch, initialData, items.length, activeCategory]);

    useEffect(() => {
        dispatch(resetCases());
        dispatch(fetchProducts({ offset: 0, category: activeCategory !== 'Все' ? CATEGORIES[activeCategory] : undefined }));
    }, [activeCategory, dispatch]);

    const loadMore = () => {
        if(hasMore){
            dispatch(fetchProducts({offset, category: activeCategory !== 'Все' ? CATEGORIES[activeCategory] : undefined }));
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
            <section className={styles.categories}>
                {(Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>).map(category => (
                    <button 
                        key={category}
                        className={`${styles.category} ${activeCategory === category ? styles.active : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </section>
            <section className={styles["cases-items"]}>
                {items.map((item: CaseItem) => {
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
