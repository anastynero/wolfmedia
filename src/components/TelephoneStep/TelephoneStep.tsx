import { FormSchema } from '@/components/ModalForm/types/formSchema';
import styles from '@/components/ModalForm/ModalForm.module.css';

interface TelephoneProps {
  formData: FormSchema;
  errors: Partial<FormSchema>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatPhone: (value: string) => string;
  isActive: boolean;
}

export default function TelephoneStep({ formData, errors, onChange, formatPhone, isActive }: TelephoneProps) {
  return (
    <div className={styles["form-group"]}>
      <input
        name="telephone"
        className={`${styles.input} ${!isActive ? styles.disabled : ''}`}
        id="telephone"
        required
        placeholder=""
        value={formatPhone(formData.telephone || '')}
        onChange={onChange}
        disabled={!isActive}
      />
      <label className={styles.label} htmlFor="telephone">Ваш телефон</label>
      {errors.telephone && (
        <span className={styles.error}>
          {errors.telephone}
        </span>
      )}
    </div>
  );
}