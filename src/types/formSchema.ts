import { z } from 'zod';

export const formSchema = z.object({
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
    .max(80, { message: 'Максимальное количество символов: 80' }),
});

export type FormSchema = z.infer<typeof formSchema>;