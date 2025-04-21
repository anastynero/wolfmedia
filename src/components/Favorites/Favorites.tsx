import { CaseItem } from '@/store/casesSlice'
import styles from './Favorites.module.css'
import CaseDetails from '../CaseDetails/CaseDetails'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { addFavorite, removeFavorite } from '@/store/favoritesSlice';


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
            <span>{favoritesCount}</span>
            {favoriteCases.length > 0 ? (
                <div className={styles.caseList}>
                {favoriteCases.map((caseItem: CaseItem) => (
                    <div key={caseItem.slug} className={styles.caseItem}>
                        <h2 className={styles.caseTitle}>{caseItem.title}</h2>
                        <button onClick={() => handleRemoveFavorite(caseItem.slug)}>
                            Удалить из избранного
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