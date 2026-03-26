import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  onClick = () => {}, 
  ariaLabel,
  children 
}) => {
  return (
    <button 
      type="button"
      className={styles.iconButton}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
