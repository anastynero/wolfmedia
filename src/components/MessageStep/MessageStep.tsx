import { FormSchema } from '@/types/formSchema';
import styles from '@/components/ModalForm/ModalForm.module.css';

interface Step3Props {
  formData: FormSchema;
  errors: Partial<FormSchema>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isActive: boolean;
}

export default function Step3({ formData, errors, onChange, isActive }: Step3Props) {
  return (
    <div className={styles["form-group"]}>
      <textarea
        name="message"
        value={formData.message}
        onChange={onChange}
        className={`${styles.input} ${!isActive ? styles.disabled : ''}`}
        id="message"
        required
        placeholder=" "
        maxLength={70}
        disabled={!isActive}
      />
      <label className={styles.label} htmlFor="message">Ваше сообщение</label>
      {errors.message && (
        <span className={styles.error}>
          {errors.message}
        </span>
      )}
    </div>
  );
}