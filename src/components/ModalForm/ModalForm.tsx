"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef } from 'react';
import styles from './ModalForm.module.css'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form';

interface ModalFormProps{
    isOpen: boolean;
    onClose: () => void;
}

const formSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: 'Имя пользователя слишком короткое' })
      .max(20, 'Имя пользователя слишком длинное')
      .transform((v) => v.toLowerCase().replace(/\s+/g, '_')),

    telephone: z
      .string()
      .regex(/^\d{11}$/, {
        message: 'Номер телефона должен содержать ровно 11 цифр',
      }),

    message: z
      .string()
      .max(100, { message: 'Максимальное количество символов: 100' }),
});

type FormSchema = z.infer<typeof formSchema>

export default function ModalForm({ isOpen, onClose } : ModalFormProps){
    const dialogRef = useRef<HTMLDialogElement>(null);
    
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
    
        if (isOpen) {
          if (!dialog.open) dialog.showModal();
          document.body.style.overflow = 'hidden'; 
          document.body.style.height = '100vh';
          document.body.style.opacity = '0.3';
        } else {
          if (dialog.open) dialog.close();
          document.body.style.overflow = ''; 
          document.body.style.opacity = '1';
        }
    
        return () => {
          document.body.style.overflow = ''; 
          document.body.style.opacity = '1';
        };
      }, [isOpen]);

    const handleClickOutside = (event: React.MouseEvent) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        formState: { isDirty, isSubmitting, errors },
      } = useForm<FormSchema>({ resolver: zodResolver(formSchema) })
    
    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        console.log(data)
        reset()
    }
    
    useEffect(() => {
        setFocus('username')
    }, [])

    return(
      isOpen && (
            <dialog ref={dialogRef} className={styles.dialog} onClick={handleClickOutside}>
                <section className={styles["modal-content"]}>
                    <h4>НАПИСАТЬ НАМ</h4>
                    <form action="" className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles["form-group"]}>
                        <input {...register('username')} className={styles.input} type="text" id="name" required placeholder=" "/>
                        {errors.username && (
                          <span  className={styles.error}>
                           {errors.username?.message}
                          </span>
                        )}
                        <label className={styles.label} htmlFor="name">Ваше имя</label>
                    </div>
                    <div className={styles["form-group"]}>
                        <input {...register('telephone')} className={styles.input} type="tel" id="telephone" required placeholder=" "/>
                        {errors.telephone && (
                          <span  className={styles.error}>
                           {errors.telephone?.message}
                          </span>
                        )}
                        <label className={styles.label} htmlFor="telephone">Ваш телефон</label>
                    </div>
                    <div className={styles["form-group"]}>
                        <textarea {...register('message')} className={styles.input} id="message" required placeholder=" "></textarea>
                        {errors.message && (
                          <span  className={styles.error}>
                           {errors.message?.message}
                          </span>
                        )}
                        <label className={styles.label} htmlFor="message">Ваше сообщение</label>
                    </div>
                    <div className={styles["wrapper-btn"]}>
                      <button className={styles.btn} type='submit'>ОТПРАВИТЬ</button>
                    </div>
                    </form>
                    <p className={styles.text}>Нажимая кнопку &laquo;Отправить&raquo; вы&nbsp;даёте своё 
                      <br/>согласие на&nbsp;обработку персональных данных</p>
                </section>
            </dialog>
    ))
}
