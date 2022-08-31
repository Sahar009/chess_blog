import { useRouter } from 'next/router';
import Link from "next/link";
import styles from '../styles/Toolbar.module.css';
// import styles from '../styles/styleList.module.scss'
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


export const Toolbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const router = useRouter();
  const [activeToolbar, setActiveToolbar] = useState('#')
 
  return (
    <div className={styles.main} >
      <div className={activeToolbar === '#' ? 'active' : ''} onClick={() => router.push('/')} data-aos="fade-left">Home</div>
      <div onClick={() => router.push('contact')} className={activeToolbar === '/contact' ? 'active' : ''} data-aos="fade-in">Contact</div>
      <div onClick={() => router.push('about')}className={activeToolbar === '#about' ? 'active' : ''} data-aos="fade-right">About</div>
      

    </div>
   
  );
};
