import styles from './SuccessForm.module.css'


export default function SuccessForm(){
    return(
        <dialog className={styles.wrapper} open>
            <article className={styles.success}>
            <svg className={styles.checkmark} viewBox="0 0 100 100">
                <circle className={styles.circle} cx="50" cy="40" r="38" fill="none" stroke="#fff"/>
                <path className={styles.check} fill="none" d="M35 40 L45 50 L65 30"/>
            </svg>
            <p className={styles.text}>Форма успешно отправлена!</p>
            </article>
        </dialog>
    )
}