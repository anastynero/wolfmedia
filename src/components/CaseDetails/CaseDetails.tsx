"use client"

import { CaseItem } from "@/store/casesSlice"
import { htmlToText } from "html-to-text"

export default function CaseDetails({ data }: { data: CaseItem }){
    console.log('CaseDetails data:', JSON.stringify(data, null, 2))
    return(
        <article className="case">
            <h1>{htmlToText(data.title)}</h1>

            {data.poster?.image?.src && (
  <img 
    src={data.poster.image.src}
    alt={data.title || 'Case image'}
  />
)}
        </article>
    )
}