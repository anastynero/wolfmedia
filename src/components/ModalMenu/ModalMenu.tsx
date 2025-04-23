import Navbar from "../Navbar/Navbar";
import styles from './ModalMenu.module.css'
import Image from 'next/image';
import telephone from "./../../../public/img/telephone.svg"
import { useEffect } from "react";

export default function ModalMenu({isOpen}: {isOpen : boolean, onClose: () => void}){
        useEffect(() => {
            if (isOpen) {
              document.body.style.overflow = 'hidden'; 
              document.body.style.height = '100vh';
            } else {
              document.body.style.overflow = ''; 
            }
        
            return () => {
              document.body.style.overflow = ''; 
            };
          }, [isOpen]);
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