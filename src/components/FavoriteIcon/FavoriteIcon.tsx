import styles from './FavoriteIcon.module.css'

interface FavoriteIconProps {
    isFavorite: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }

export default function FavoriteIcon({ isFavorite, onClick }: FavoriteIconProps){
    return(
    <button className={styles.button1} onClick={onClick}>
        <svg className={styles.svg}>
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox" className={styles.path}>
                <path d="M1,0.416 a0.028,0.029,0,0,0,-0.022,-0.02 l-0.311,-0.048,-0.14,-0.296 a0.028,0.029,0,0,0,-0.05,0
                 l-0.139,0.296,-0.311,0.047 a0.028,0.029,0,0,0,-0.015,0.051 l0.225,0.231,-0.053,0.325
                  a0.028,0.029,0,0,0,0.041,0.031 l0.278,-0.154,0.279,0.154 a0.028,0.029,0,0,0,0.041,-0.031
                   l-0.053,-0.325,0.225,-0.231 a0.028,0.029,0,0,0,0.007,-0.03"></path>
            </clipPath>
        </svg>
        <div className={`${styles.clipped} ${isFavorite ? styles.filled : styles.outlined}`}></div>
    </button>
    )
}