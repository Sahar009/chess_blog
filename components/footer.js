import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export const Footer = () => {
  const router = useRouter();
  return (
    <section id={styles.footer}>
      <div className={styles.footer}>
        <div className={styles.footerbox}>
          <h4>Useful Links</h4>
          <div className={styles.footerlinks}>
            <a href="#">&bull; Tips Store</a>
            <a href="#">&bull; Pricing</a>
            <a href="#">&bull; Account</a>
            <a href="#">&bull; Terms & Condition</a>
            
          </div>
        </div>
        <div className={styles.footerbox}>
          <h4>Support</h4>
          <div className={styles.footerlinks}>
            <a href="#">&bull; Contact</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Disclaimer</a>
            <a href="#">&bull; VIP</a>
          </div>
        </div>
        <div className={styles.footerbox}>
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
           
            <p>
              <FaPhoneAlt /> &nbsp; Whatsapp: +1230 123 1231.
            </p>
          
            <p>
              <FaEnvelope /> &nbsp; Email: info@socialx.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.Xpredict.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          {/* <img src={logo} alt="logo" /> */}
          <p className="u-text-small">&copy; Copyright 2022. XPredict.com</p>
        </div>
      </div>
    </section>
  );
};
