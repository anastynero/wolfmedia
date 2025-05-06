"use client"

import styles from './Cases.module.css'
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/store';
import { fetchProducts, resetCases } from '@/store/casesSlice';
import { CaseItem } from '@/store/casesSlice';
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';
import Case from '../Case/Case';

const CATEGORIES = [
    {title: 'Все', value: undefined},
    {title: 'Дизайн', value:'design'},
    {title: 'Аналитика', value:'analytics'},
    {title: 'Разработка', value:'development'}
];

export default function Cases({ initialData }: { initialData?: CaseItem[] }) {
    const dispatch = useAppDispatch()
    const { items, offset, hasMore } = useSelector((state: RootState) => state.cases)
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].title);
    const activeCategoryValue = CATEGORIES.find(c => c.title === activeCategory)?.value
    
    useEffect(() => {
        if (initialData && initialData.length > 0 && items.length === 0 && activeCategory === 'Все') {
          dispatch({ type: 'cases/initialize', payload: initialData });
        }
      }, [dispatch, initialData, items.length, activeCategory]);

    useEffect(() => {
        dispatch(resetCases());
        dispatch(fetchProducts({ offset: 0, category: activeCategoryValue }))
    }, [activeCategoryValue, dispatch])

    const loadMore = useCallback(() => {
        if (hasMore) {
          dispatch(fetchProducts({ offset, category: activeCategoryValue }))
        }
      }, [dispatch, hasMore, offset, activeCategoryValue])

    const handleToggleFavorite = useCallback((slug: string) => {
      const action = favoriteSlugs.includes(slug) ? removeFavorite(slug) : addFavorite(slug)
      dispatch(action)
    }, [dispatch, favoriteSlugs])

    return (
        <section className="cases">
            <h2 className={styles.h2}>НАШИ РАБОТЫ</h2>
            <section className={styles.categories}>
                {(CATEGORIES.map(({title}) => (
                    <button 
                        key={title}
                        className={`${styles.category} ${activeCategory === title ? styles.active : ''}`}
                        onClick={() => setActiveCategory(title)}
                    >
                        {title}
                    </button>
                )))}
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
