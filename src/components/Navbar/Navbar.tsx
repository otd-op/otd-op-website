import React, { useState } from 'react';
import { NavItem } from '../NavItem/NavItem';
import { IconButton } from '../IconButton/IconButton';
import LogoIcon from '../../assets/logo.svg?react';
import SearchIcon from '../../assets/search.svg?react';
import InstagramIcon from '../../assets/instagram.svg?react';
import RssIcon from '../../assets/rss.svg?react';
import DividerIcon from '../../assets/divider.svg?react';
import styles from './Navbar.module.css';

export interface NavbarProps {
  variant?: 'desktop' | 'tablet' | 'mobile';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'desktop' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const isMobile = variant === 'mobile';
  const isTablet = variant === 'tablet';
  const showHamburger = isMobile || isTablet;
  const showDesktopNav = !showHamburger;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav 
      className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ''}`}
      data-variant={variant}
    >
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="Off The Defensive Home">
          <LogoIcon />
        </a>

        {/* Desktop/Tablet Navigation */}
        {showDesktopNav && (
          <div className={styles.navLinks}>
            <NavItem href="#" active={true}>ABOUT</NavItem>
            <NavItem href="#">ARTICLES</NavItem>
            <NavItem href="#">DOCUMENTS</NavItem>
            <NavItem href="#">JOIN!</NavItem>
          </div>
        )}

        {/* Action Icons */}
        <div className={styles.actions}>
          {showDesktopNav && (
            <>
              <IconButton ariaLabel="Search" onClick={() => console.log('Search clicked')}>
                <SearchIcon />
              </IconButton>
              <IconButton ariaLabel="Instagram" onClick={() => console.log('Instagram clicked')}>
                <InstagramIcon />
              </IconButton>
              <IconButton ariaLabel="RSS Feed" onClick={() => console.log('RSS clicked')}>
                <RssIcon />
              </IconButton>
            </>
          )}
          
          {/* Mobile Menu Toggle */}
          {showHamburger && (
            <button 
              type="button"
              className={styles.menuToggle}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className={styles.hamburger}></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showHamburger && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileNavLinks}>
            <NavItem href="#" active={true}>ABOUT</NavItem>
            <NavItem href="#">ARTICLES</NavItem>
            <NavItem href="#">DOCUMENTS</NavItem>
            <NavItem href="#">JOIN!</NavItem>
          </div>
          <div className={styles.mobileActions}>
            <IconButton ariaLabel="Search" onClick={() => console.log('Search clicked')}>
              <SearchIcon />
            </IconButton>
            <IconButton ariaLabel="Instagram" onClick={() => console.log('Instagram clicked')}>
              <InstagramIcon />
            </IconButton>
            <IconButton ariaLabel="RSS Feed" onClick={() => console.log('RSS clicked')}>
              <RssIcon />
            </IconButton>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className={styles.divider}>
        <DividerIcon />
      </div>
    </nav>
  );
};

export default Navbar;
