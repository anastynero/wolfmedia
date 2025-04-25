import styles from './SuccessForm.module.css'


export default function SuccessForm(){
    return(
        <dialog className={styles.wrapper} open>
            <article className={styles.success}>
            <svg className={styles.checkmark} viewBox="0 0 100 100">
                <circle className={styles.circle} cx="40" cy="40" r="40" fill="none" stroke="#fff"/>
                <path className={styles.check} fill="none" d="M23 40 L35 52 L57 28"/>
            </svg>
            <p className={styles.text}>Форма успешно отправлена!</p>
            </article>
        </dialog>
    )
}