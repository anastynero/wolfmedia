import { CaseItem } from '@/store/casesSlice';
import styles from './Favorites.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFavorite } from '@/store/favoritesSlice';
import { htmlToText } from 'html-to-text';


export default function Favorites() {
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    const dispatch = useDispatch();
    const allCases = useSelector((state: RootState) => state.cases.items)

    const favoriteCases = allCases.filter((caseItem: CaseItem) => 
        favoriteSlugs.includes(caseItem.slug)
    );
  
    const favoritesCount = favoriteSlugs.length;

    const handleRemoveFavorite = (slug: string) => {
        dispatch(removeFavorite(slug));
    };

    return(
        <section className={styles.favorites}>
            <h2 className={styles.h2}>Избранные кейсы: <span>{favoritesCount}</span></h2>
            {favoriteCases.length > 0 ? (
                <div className={styles.caseList}>
                {favoriteCases.map((caseItem: CaseItem) => (
                    <div key={caseItem.slug} className={styles.caseItem}>
                        <h4 className={styles.caseTitle}>{htmlToText(caseItem.title)}</h4>
                        <button onClick={() => handleRemoveFavorite(caseItem.slug)} className={styles.delete}>
                            Удалить
                        </button>
                    </div>
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