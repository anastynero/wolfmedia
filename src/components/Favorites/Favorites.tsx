import { CaseItem } from '@/store/casesSlice';
import styles from './Favorites.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFavorite } from '@/store/favoritesSlice';
import { htmlToText } from 'html-to-text';
import Case from '../Case/Case';


export default function Favorites() {
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    const dispatch = useDispatch();
    const allCases = useSelector((state: RootState) => state.cases.items)

    const favoriteCases = allCases.filter((caseItem: CaseItem) => 
        favoriteSlugs.includes(caseItem.slug)
    );

    const status = useSelector((state: RootState) => state.cases.status);
        if (status !== 'succeeded') {
            return <p>Загрузка избранных кейсов...</p>;
        }
  
    const favoritesCount = favoriteCases.length;

    const handleRemoveFavorite = (slug: string) => {
        dispatch(removeFavorite(slug));
    };

    return(
        <section className={styles.favorites}>
            <h2 className={styles.h2}>Избранные кейсы: <span>{favoritesCount}</span></h2>
            {favoriteCases.length > 0 ? (
                <div className={styles.caseList}>
                {favoriteCases.map((caseItem: CaseItem) => (
                    <Case
                    key={caseItem.slug}
                    data={caseItem}
                    onToggleFavorite={handleRemoveFavorite} 
                />
                ))}
            </div>
      ) : (
        <div className={styles.emptyState}>
          <p>Нет избранных кейсов</p>
        </div>
      )}
        </section>
    )
}