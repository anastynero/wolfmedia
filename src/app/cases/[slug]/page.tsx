"use client";

import { useParams } from "next/navigation";
import Case from "@/components/Case/Case";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { addFavorite, removeFavorite } from "@/store/favoritesSlice";
import { useEffect, useState } from "react";

export default function CasePage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const [data, setData] = useState<any>(null);
  const favoriteSlugs = useSelector(
    (state: RootState) => state.favorites.favoritesSlugs
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      if (!slug) return;

      try {
        const response = await fetch(
          `https://api.cms.chulakov.dev/page/work/${slug}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Ошибка при загрузке кейса:", error);
      }
    };

    getData();
  }, [slug]);

  const handleToggleFavorite = (slug: string) => {
    if (favoriteSlugs.includes(slug)) {
      dispatch(removeFavorite(slug));
    } else {
      dispatch(addFavorite(slug));
    }
  };

  if (!data) return <p>Загрузка...</p>; 

  return (
    <Case data={data} slug={slug} onToggleFavorite={handleToggleFavorite} />
  );
}
