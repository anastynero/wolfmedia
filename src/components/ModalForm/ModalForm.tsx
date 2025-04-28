"use client"

import { useState } from 'react';
import styles from './ModalForm.module.css'
import Image from 'next/image';
import {close} from '@/images'
import UserNameStep from '../UserNameStep/UserNameStep';
import TelephoneStep from '../TelephoneStep/TelephoneStep';
import MessageStep from '../MessageStep/MessageStep';
import SuccessForm from '../SuccessForm/SuccessForm';
import { useModal } from './hooks/useModal';
import { useForm } from './hooks/useForm';
import { usePhoneFormatter } from './hooks/usePhoneFormatter';


interface ModalFormProps{
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalForm({ isOpen, onClose } : ModalFormProps){
  const { dialogRef, handleClickOutside } = useModal(isOpen, onClose);
  const { formData, errors, handleChange, handlePhoneChange, handleSubmit, completedSteps, isSubmitting, isStepActive } = 
  useForm(() => {
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 2000);
  });
  const { formatPhone } = usePhoneFormatter();
  const [isSuccess, setIsSuccess] = useState(false);

    return(
      isOpen && (
            <dialog ref={dialogRef} className={styles.dialog} onClick={handleClickOutside}>
                <section className={styles["modal-content"]}>
                {isSuccess ? (
                <SuccessForm />
                      ) : (
                        <>
                    <h4>НАПИСАТЬ НАМ</h4>
                    <form action="" className={styles.wrapper} onSubmit={handleSubmit}>
                      <div className={styles.step}>
                        <UserNameStep 
                        formData={formData} 
                        errors={errors} 
                        onChange={handleChange} 
                        isActive={isStepActive(1)}/>
                        <svg width={20} height={50}>
                          <line x1="10" x2="10" y1="0" y2="70" stroke="#6A4E70" strokeWidth="2" 
                          className={ completedSteps.length >= 1 ? styles.line : ''}/>
                          </svg>
                        </div>
                        <div className={styles.step}>
                        <TelephoneStep 
                        formData={formData} 
                        errors={errors} 
                        onChange={handlePhoneChange} 
                        formatPhone={formatPhone} 
                        isActive={isStepActive(2)}/>
                        <svg width={20} height={50}><line x1="10" x2="10" y1="0" y2="70" stroke="#6A4E70" strokeWidth="2"
                        className={ completedSteps.length >= 2 ? styles.line : ''}/></svg>
                        </div>
                        <div className={styles.step}>
                        <MessageStep 
                        formData={formData} 
                        errors={errors} 
                        onChange={handleChange}
                        isActive={isStepActive(3)}/>
                        <svg width={20} height={70}><line x1="10" x2="10" y1="0" y2="70" stroke="#6A4E70" strokeWidth="2"
                        className={ completedSteps.length >= 3 ? styles.line : ''}/></svg>
                        </div>
                    <div className={styles["wrapper-btn"]}>
                      <button type="submit" className={styles.btn} disabled={isSubmitting || completedSteps.length < 3}>ОТПРАВИТЬ</button>
                    </div>
                    </form>
                    <p className={styles.text}>Нажимая кнопку &laquo;Отправить&raquo; 
                      вы&nbsp;даёте своё согласие на&nbsp;обработку персональных данных</p>
                    <Image
                      src={close}
                      alt='Закрыть'
                      width={30}
                      height={30}
                      className={styles.close}
                      onClick={onClose}
                    />
                    </>
                    )}
                </section>
            </dialog>
    ))
}
