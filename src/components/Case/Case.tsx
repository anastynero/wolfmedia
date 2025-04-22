import { htmlToText } from 'html-to-text';
import styles from './Case.module.css'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { CaseItem } from '@/store/casesSlice';
import Link from 'next/link';
import Image from 'next/image';
import {logo} from '@/images'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface CaseProps {
    data: CaseItem,
    slug?: string,
    onToggleFavorite: (slug: string) => void;
}

export default function Case({data, slug, onToggleFavorite} : CaseProps){
    const imageSrc = data?.banner?.image?.src || data?.banner?.poster?.image?.src ||
    data?.poster?.image?.src || logo;
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    const curSlug = slug ? slug : data.slug
    const isFavorite = favoriteSlugs.includes(curSlug);;

    return(
        <Link href={`/cases/${curSlug}`} passHref>
        <article className={styles.case}>
                <h4 className={styles.h1}>{htmlToText(data.title)}</h4>
                <Image
                src={imageSrc}
                alt=''
                width={500}
                height={500}
                className={styles.image}
                />
                <FavoriteIcon
                    isFavorite={isFavorite}
                     onClick={(e) => {
                        e.preventDefault();
                        onToggleFavorite(curSlug);
                    }}/>
        </article>
        </Link>
    )
}