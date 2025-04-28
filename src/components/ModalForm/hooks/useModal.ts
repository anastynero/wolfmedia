import { useEffect, useRef } from 'react';

export const useModal = (isOpen: boolean, onClose: () => void) => {
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

  return { dialogRef, handleClickOutside };
};