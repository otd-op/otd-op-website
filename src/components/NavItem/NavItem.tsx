import React from 'react';
import styles from './NavItem.module.css';

interface NavItemProps {
  href?: string;
  active?: boolean;
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ 
  href = "#", 
  active = false, 
  children 
}) => {
  return (
    <a 
      href={href} 
      className={`${styles.navItem} ${active ? styles.active : ''}`}
    >
      {children}
    </a>
  );
};

export default NavItem;
