"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './ModalForm.module.css'
import Image from 'next/image';
import {close} from '@/images'
import UserNameStep from '../UserNameStep/UserNameStep';
import TelephoneStep from '../TelephoneStep/TelephoneStep';
import MessageStep from '../MessageStep/MessageStep';
import { formSchema, FormSchema } from '@/types/formSchema';
import { z } from 'zod';


interface ModalFormProps{
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalForm({ isOpen, onClose } : ModalFormProps){
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [formData, setFormData] = useState<FormSchema>({
      username: '',
      telephone: '',
      message: ''
    });
    const [errors, setErrors] = useState<Partial<FormSchema>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({...prev, [name]: value }));
      validateField(name as keyof FormSchema, value);
    };
  
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, '').slice(0, 11);
      setFormData(prev => ({
        ...prev,
        telephone: raw
      }));
      validateField('telephone', raw);
    };

    const formatPhone = (value: string) => {
      const digits = value.replace(/\D/g, '').slice(0, 11);
      if (!digits) return '';

      let formatted = '+';

      if (digits.length >= 1) { formatted += digits[0]; }
      if (digits.length >= 2) { formatted += ' (' + digits.slice(1, 4); }
      if (digits.length >= 5) { formatted += ') ' + digits.slice(4, 7); }
      if (digits.length >= 8) { formatted += '-' + digits.slice(7, 9); }
      if (digits.length >= 10) { formatted += '-' + digits.slice(9, 11); }

      return formatted;
    };

    const validateField = (field: keyof FormSchema, value: string) => {
      try {
          formSchema.shape[field].parse(value);
          
          setErrors(prev => {
              const newErrors = { ...prev };
              delete newErrors[field];
              return newErrors;
          });

          const stepNumber = getStepNumber(field);
          if (stepNumber && !completedSteps.includes(stepNumber)) {
              setCompletedSteps(prev => [...prev, stepNumber]);
          }
      } catch (error) {
          if (error instanceof z.ZodError) {
              setErrors(prev => ({
                  ...prev,
                  [field]: error.errors[0].message
              }));
          }
      }
    };

    const getStepNumber = (field: keyof FormSchema): number => {
      switch(field) {
          case 'username': return 1;
          case 'telephone': return 2;
          case 'message': return 3;
          default: return 0;
      }
    };

    const isStepActive = (stepNumber: number): boolean => {
      return stepNumber === 1 || completedSteps.includes(stepNumber - 1);
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        formSchema.parse(formData);
        console.log(formData);
        onClose();
        setFormData({ username: '', telephone: '', message: '' });
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors: Partial<FormSchema> = {};
          error.errors.forEach(err => {
            const path = err.path[0] as keyof FormSchema;
            newErrors[path] = err.message;
          });
          setErrors(newErrors);
        }
      } finally {
        setIsSubmitting(false);
      }
    };

    return(
      isOpen && (
            <dialog ref={dialogRef} className={styles.dialog} onClick={handleClickOutside}>
                <section className={styles["modal-content"]}>
                    <h4>НАПИСАТЬ НАМ</h4>
                    <form action="" className={styles.wrapper} onSubmit={handleSubmit}>
                        <UserNameStep 
                        formData={formData} 
                        errors={errors} 
                        onChange={handleChange} 
                        isActive={isStepActive(1)}/>
                        <TelephoneStep 
                        formData={formData} 
                        errors={errors} 
                        onChange={handlePhoneChange} 
                        formatPhone={formatPhone} 
                        isActive={isStepActive(2)}/>
                        <MessageStep 
                        formData={formData} 
                        errors={errors} 
                        onChange={handleChange}
                        isActive={isStepActive(3)}/>
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
                </section>
            </dialog>
    ))
}
