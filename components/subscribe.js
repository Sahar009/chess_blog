import  { useEffect } from "react";
import { useRouter } from 'next/router';
import styles from '../styles/subscribe.module.css'
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// import AOS from "aos";
// import "aos/dist/aos.css";

export const Subscribe = () => {
    const router = useRouter();
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);
  return (
    <section id={styles.subscribe}>
      <div className={styles.subscribe} data-aos="fade-up" >          
      
        <h2>Subscribe now!</h2>
        <form className={styles.form}>
          <div className={styles.forminput}>
            <input type="text" placeholder="Enter Your Email..." />
            <button className={styles.formbutton}>Subscribe</button>
          </div>
        </form>
        <div className={styles.socialicons}>
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className={styles.socialicon}>
            <FaFacebookF />
          </div>
          <div className={styles.socialicon}>
            <FaTwitter />
          </div>
          <div className={styles.socialicon}>
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};



