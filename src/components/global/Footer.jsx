import React from 'react';
import style from '../../styles/module-css/Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading it here!</p>
        <div>
          <span>Product</span>
          <span>Company</span>
          <span>Learn More</span>
          <span>Get in touch</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
