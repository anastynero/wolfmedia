"use client"

import { CaseItem } from "@/store/casesSlice"
import { htmlToText } from "html-to-text"
import styles from './CaseDetails.module.css'
import { favorites, favoritesActive } from './../../images'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from './../../store/favoritesSlice'
import { RootState } from "@/store"
import Cookies from 'js-cookie';

interface CaseDetailsProps {
    data: CaseItem;
}

export default function CaseDetails({ data }: CaseDetailsProps) {
    console.log(data.slug)
    const dispatch = useDispatch();

    const favoritesList = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    
    const isFavorite = Cookies.get('favoritesSlugs') ? JSON.parse(Cookies.get('favoritesSlugs')!) : [];
    const isFavoriteForThisCase = isFavorite.includes(data.slug); 

    const handleToggleFavorite = () => {
        if (isFavoriteForThisCase) {
            dispatch(removeFavorite(data.slug));
        } else {
            dispatch(addFavorite(data.slug));
        }
    };

    return (
        <div className={styles.wrapper}>
            <article className={styles.case}>
                <img 
                    src={data.banner.poster.image.src} 
                    alt={data.title} 
                    className={styles.image}
                />
                <h1 className={styles.h1}>{htmlToText(data.title)}</h1>
            </article>
            <button className={styles.button} onClick={handleToggleFavorite}>
                <Image 
                    src={isFavoriteForThisCase ? favoritesActive : favorites} 
                    alt="" 
                    className={styles.icon}
                    width={50}
                    height={50}
                />
            </button>
        </div>
    )
}
