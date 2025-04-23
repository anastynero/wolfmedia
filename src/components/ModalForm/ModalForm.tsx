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
        setValue,
        watch,
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

    const rawPhone = watch('telephone');

    const formatPhone = (value: string) => {
      const digits = value.replace(/\D/g, '').slice(0, 11);
    
      if (!digits) return '';
    
      let formatted = '+';
    
      if (digits.length >= 1) {
        formatted += digits[0]; 
      }
      if (digits.length >= 2) {
        formatted += ' (' + digits.slice(1, 4); 
      }
      if (digits.length >= 5) {
        formatted += ') ' + digits.slice(4, 7); 
      }
      if (digits.length >= 8) {
        formatted += '-' + digits.slice(7, 9); 
      }
      if (digits.length >= 10) {
        formatted += '-' + digits.slice(9, 11); 
      }
    
      return formatted;
    };
    const usernameValue = watch('username');
    return(
      isOpen && (
            <dialog ref={dialogRef} className={styles.dialog} onClick={handleClickOutside}>
                <section className={styles["modal-content"]}>
                    <h4>НАПИСАТЬ НАМ</h4>
                    <form action="" className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles["form-group"]}>
                        <input {...register('username')} 
                        className={styles.input}
                        type="text" 
                        id="name" 
                        required 
                        placeholder=""
                        minLength={2}
                        maxLength={20}/>
                        {errors.username && (
                          <span  className={styles.error}>
                           {errors.username?.message}
                          </span>
                        )}
                        <label className={styles.label} htmlFor="name">Ваше имя</label>
                    </div>
                    <div className={styles["form-group"]}>
                        <input {...register('telephone')} className={styles.input}
                         id="telephone" required placeholder=""   
                        value={formatPhone(rawPhone || '')}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, '');
                          setValue('telephone', raw, { shouldValidate: true }); 
                        }}
                      />
                      
                        {errors.telephone && (
                          <span  className={styles.error}>
                           {errors.telephone?.message}
                          </span>
                        )}
                        <label className={styles.label} htmlFor="telephone">Ваш телефон</label>
                    </div>
                    <div className={styles["form-group"]}>
                        <textarea {...register('message')} className={styles.input} id="message" required placeholder=" " maxLength={70}>
                        </textarea>
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
                    <p className={styles.text}>Нажимая кнопку &laquo;Отправить&raquo; вы&nbsp;даёте своё согласие на&nbsp;обработку персональных данных</p>
                </section>
            </dialog>
    ))
}
