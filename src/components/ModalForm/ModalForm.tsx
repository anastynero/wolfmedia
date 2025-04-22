import styles from './ModalForm.module.css'

export default function ModalForm(){
    return(
            <dialog open className={styles.dialog}>
                <section className={styles["modal-content"]}>
                    <h4>НАПИСАТЬ НАМ</h4>
                    <form action="" className={styles.wrapper}>
                        <label htmlFor=""></label>
                        <input className={styles.input} type="text" />
                        <label htmlFor=""></label>
                        <input className={styles.input} type="tel" />
                        <label htmlFor=""></label>
                        <textarea className={styles.input} name="" id=""></textarea>
                        <button type='submit'>ОТПРАВИТЬ</button>
                    </form>
                    <p>Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных</p>
                </section>
            </dialog>
    )
}