import { FormSchema } from '@/types/formSchema';
import styles from '@/components/ModalForm/ModalForm.module.css';

interface Step2Props {
  formData: FormSchema;
  errors: Partial<FormSchema>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatPhone: (value: string) => string;
  isActive: boolean;
}

export default function Step2({ formData, errors, onChange, formatPhone, isActive }: Step2Props) {
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