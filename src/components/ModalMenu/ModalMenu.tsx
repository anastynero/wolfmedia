import Navbar from "../Navbar/Navbar";
import styles from './ModalMenu.module.css'
import Image from 'next/image';
import telephone from "./../../../public/img/telephone.svg"

export default function ModalMenu({isOpen}: {isOpen : boolean, onClose: () => void}){
    return(
        <section className={`${styles["modal-menu"]} ${isOpen ? styles.open : ""}`}>
            <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.contacts}>
              <Image
              src={telephone}
              alt="Телефон"
              width={24}
              height={24}
              className={styles["telephone-icon"]}
              />
              <h5 className={styles.telephone}>+7 495 257 55 65</h5>
              <button className={styles.button}>
                <span className={styles.text}>Написать нам</span>
            </button>
            </div>
            </div>
        </section>
    );
}