import { useState } from 'react';
import { formSchema, FormSchema } from '../types/formSchema';
import { z } from 'zod';

export const useForm = (onSuccess: () => void) => {
    const [formData, setFormData] = useState<FormSchema>({ username: '', telephone: '', message: '' });
    const [errors, setErrors] = useState<Partial<FormSchema>>({});
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      validateField(name as keyof FormSchema, value);
    };
  
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, '').slice(0, 11);
      setFormData(prev => ({ ...prev, telephone: raw }));
      validateField('telephone', raw);
    };

    const resetForm = () => {
        setFormData({ username: '', telephone: '', message: '' });
        setErrors({});
        setCompletedSteps([]);
        setIsSubmitting(false);
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
          setErrors(prev => ({ ...prev, [field]: error.errors[0].message }));
        }
      }
    };
  
    const getStepNumber = (field: keyof FormSchema): number => {
      switch (field) {
        case 'username': return 1;
        case 'telephone': return 2;
        case 'message': return 3;
        default: return 0;
      }
    };
  
    const isStepActive = (stepNumber: number) => {
      return stepNumber === 1 || completedSteps.includes(stepNumber - 1);
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setCompletedSteps([]);
  
      try {
        formSchema.parse(formData);
        console.log(formData);
        onSuccess();
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
  
    return {
      formData,
      errors,
      handleChange,
      handlePhoneChange,
      handleSubmit,
      completedSteps,
      isSubmitting,
      isStepActive,
      resetForm
    };
  };