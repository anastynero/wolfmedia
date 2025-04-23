"use client"

import Favorites from "@/components/Favorites/Favorites";
import { useAppDispatch, RootState } from "@/store";
import { fetchProducts } from "@/store/casesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
    const dispatch = useAppDispatch();
    const status = useSelector((state: RootState) => state.cases.status)

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProducts(0)); 
        }
      }, [dispatch, status]);
      
    return(
        <Favorites/>
    )
}