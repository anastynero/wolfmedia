"use client"

import { CaseItem } from "@/store/casesSlice"
import { htmlToText } from "html-to-text"
import styles from './CaseDetails.module.css'

export default function CaseDetails({ data }: { data: CaseItem }){
    const parseTags = (tagsString: string) => {
        if (!tagsString) return []
        return tagsString.split(', ').map(tag => tag.trim())
    }
    const tagsArray = parseTags(data.tagsDisplayed)
    return(
        <article className="case">
            <img 
            src={data.banner.poster.image.src} 
            alt={data.title} 
            className={styles.image}
            />
            <h1 className={styles.h1}>{htmlToText(data.title)}</h1>
        </article>
    )
}