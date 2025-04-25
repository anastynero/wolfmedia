import { FormSchema } from '@/components/ModalForm/types/formSchema';
import styles from '@/components/ModalForm/ModalForm.module.css';

interface UserNameProps {
  formData: FormSchema;
  errors: Partial<FormSchema>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}

export default function UserNameStep({ formData, errors, onChange, isActive }: UserNameProps) {
  return (
    <div className={styles["form-group"]}>
      <input
        name="username"
        value={formData.username}
        onChange={onChange}
        className={`${styles.input} ${!isActive ? styles.disabled : ''}`}
        type="text"
        id="name"
        required
        placeholder=""
        autoFocus
        disabled={!isActive}
      />
      <label className={styles.label} htmlFor="name">Ваше имя</label>
      {errors.username && (
        <span className={styles.error}>
          {errors.username}
        </span>
      )}
    </div>
  );
}