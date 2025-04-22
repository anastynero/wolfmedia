"use client"

import { CaseItem } from "@/store/casesSlice"
import styles from './CaseDetails.module.css'
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { addFavorite, removeFavorite } from "@/store/favoritesSlice";
import Case from "../Case/Case";

interface CaseDetailsProps {
    data: CaseItem;
    slug:string
}

export default function CaseDetails({ data, slug }: CaseDetailsProps) {
    const favoriteSlugs = useSelector((state: RootState) => state.favorites.favoritesSlugs);
    const dispatch = useAppDispatch()

    const handleToggleFavorite = (slug: string) => {
        if (favoriteSlugs.includes(slug)) {
            dispatch(removeFavorite(slug)); 
        } else {
            dispatch(addFavorite(slug)); 
        }
    }

    return (
        <div className={styles.wrapper}>
            <Case data={data} onToggleFavorite={handleToggleFavorite} />
        </div>  
    )
}
