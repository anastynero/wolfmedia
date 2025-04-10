import clsx from "clsx";
import styles from "./Button.module.css"

type Props = {
    children: string;
    className?: string;
}

export default function Button({children, className} : Props){
    return(
        <button className={clsx(styles.button, className)}>{children}</button>
    )
}