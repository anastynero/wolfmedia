"use client"

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import {logo, telephone, logo2, mail, favoritesActive} from './../../images';
import { useState } from "react";
import ModalMenu from "@/components/ModalMenu/ModalMenu";
import ModalForm from '../ModalForm/ModalForm';

export default function Header(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openMenu = () => setIsModalOpen(true);
  const closeMenu = () => setIsModalOpen(false);
    return(
        <header className={styles.header}>
          <section className={styles["left-block"]}>
          <button className={`${styles.burger} ${isModalOpen ? styles.active : ''}`} onClick={isModalOpen ? closeMenu : openMenu}></button>
            <section className="logo">
            <Link href='/'>
            <Image
                src={logo}
                alt="Логотип"
                width={286}
                height={70}
                className={styles.logo}
            />
            </Link>
            <Link href='/'>
            <Image
                src={logo2}
                alt="Логотип"
                width={286}
                height={70}
                className={styles["logo-mini"]}
            />
            </Link>
            </section>
            <div className={styles.navigation}><Navbar/></div>
          </section>
          <section className={styles["right-block"]}>
            <div className={styles["social-media"]}>
              <SocialMedia />
            </div>
            <div className={styles.contacts}>
              <Image
              src={telephone}
              alt="Телефон"
              width={24}
              height={24}
              className={styles["telephone-icon"]}
              />
              <h5 className={styles.telephone}>+7 495 257 55 65</h5>
            </div>
            <Link href="/favorites" className={styles.favorites}>
            <Image 
              src={favoritesActive}
              alt="Избранное"
              width={30}
              height={30}
              className={styles.favorites} />
            </Link>
            <button className={styles.button}>
            <span className={styles.text}>Написать нам</span>
            <Image 
            src={mail}
            alt="Написать нам"
            width={24}
            height={24}
            className={styles.icon} />
            </button>
          </section>
          <ModalMenu isOpen={isModalOpen} onClose={closeMenu} />
          <ModalForm/>
        </header>
    );
}