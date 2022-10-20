import React, { useEffect, useState } from 'react';
import styles from '../../css-modules/scrollToTopBtn.module.css';

function ScrollToTopBtn() {
  const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setScrollToTopBtn(true);
      } else {
        setScrollToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {scrollToTopBtn && (
        <button className={styles.btn} onClick={scrollUp}>
          ▲
        </button>
      )}
    </div>
  );
}

export default ScrollToTopBtn;
