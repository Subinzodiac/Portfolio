import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Subin Kelichamkandy. <br />
        All rights reserved. <br/>
        
        Contact me at: <a href="mailto:your.email@example.com">kksubin09@gmail.com</a>
       </p>
       
      
    </section>
  );
}

export default Footer;
