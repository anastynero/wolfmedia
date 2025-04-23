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
        message: 'Телефон должен содержать ровно 11 цифр',
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
        } else {
          if (dialog.open) dialog.close();
          document.body.style.overflow = ''; 
        }
    
        return () => {
          document.body.style.overflow = ''; 
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
      } = useForm<FormSchema>()
    
    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        console.log(data)
        reset()
    }
    
    useEffect(() => {
        setFocus('username')
    }, [])
    return(
            <dialog ref={dialogRef} className={styles.dialog} onClick={handleClickOutside}>
                <section className={styles["modal-content"]}>
                    <h4>НАПИСАТЬ НАМ</h4>
                    <form action="" className={styles.wrapper}>
                    <div className={styles["form-group"]}>
                        <input className={styles.input} type="text" id="name" required placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Ваше имя</label>
                    </div>
                    <div className={styles["form-group"]}>
                        <input className={styles.input} type="tel" id="telephone" required placeholder=" "/>
                        <label className={styles.label} htmlFor="telephone">Ваш телефон</label>
                    </div>
                    <div className={styles["form-group"]}>
                        <textarea className={styles.input} id="message" required placeholder=" "></textarea>
                        <label className={styles.label} htmlFor="message">Ваше сообщение</label>
                        <button className={styles.btn} type='submit'>ОТПРАВИТЬ</button>
                    </div>
                    </form>
                    <p className={styles.text}>Нажимая кнопку &laquo;Отправить&raquo; вы&nbsp;даёте своё <br/>согласие на&nbsp;обработку персональных данных</p>
                </section>
            </dialog>
    )
}