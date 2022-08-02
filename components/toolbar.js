import { useRouter } from 'next/router';
import Link from "next/link";
import styles from '../styles/Toolbar.module.css';
// import styles from '../styles/styleList.module.scss'
import { useState } from 'react';

export const Toolbar = () => {
  const router = useRouter();
  const [activeToolbar, setActiveToolbar] = useState('#')
  return (
    <div className={styles.main}>
      <div className={activeToolbar === '#' ? 'active' : ''} onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('contact')} className={activeToolbar === '#contact' ? 'active' : ''}>Contact</div>
      <div onClick={() => router.push('about')}className={activeToolbar === '#about' ? 'active' : ''}>About</div>
      

    </div>
   
  );
};
