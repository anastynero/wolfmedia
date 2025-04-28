
export const usePhoneFormatter = () => {
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
    return { formatPhone };
}