"use client"

import { CaseItem } from "@/store/casesSlice"
import { htmlToText } from "html-to-text"
import styles from './CaseDetails.module.css'
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from './../../store/favoritesSlice'
import { RootState } from "@/store"

interface CaseDetailsProps {
    data: CaseItem;
}

export default function CaseDetails({ data }: CaseDetailsProps) {

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
        
        </div>
    )
}
