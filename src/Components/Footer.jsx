import styles from "./Footer.module.css";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Footer = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  return (
    <footer>
      <div className={`${styles.footerWrapper} ${state.theme === "light" ? "" : "dark"}`}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>back to top</button>
      
        <div className={`navbar-light ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                <img className={`${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo' />
              </div>
              <div className={`col-sm-12 col-lg-6 ${styles.icons}`}>
                <img src="/images/ico-facebook.png" alt="Facebook icon" className={styles.icon} />
                <img src="/images/ico-instagram.png" alt="Instagram icon" className={styles.icon} />
                <img src="/images/ico-whatsapp.png" alt="Whatsapp icon" className={styles.icon} />
                <img src="/images/ico-tiktok.png" alt="Tiktok icon" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer