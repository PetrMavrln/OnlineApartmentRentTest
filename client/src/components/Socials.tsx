import { useEffect } from 'react';
import { Col, Spinner, Stack } from 'react-bootstrap';
import phoneLogo from '../assets/phoneLogo.svg';
import styles from '../css-modules/contactsPage.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSocials } from '../store/reducers/ActionCreators';
import SocialItem from './SocialItem';
const Socials = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSocials());
  }, []);

  const { socials, isLoading } = useAppSelector((state) => state.socialReducer);

  return (
    <Col md={7} className={styles.col}>
      <h1>Будьте на связи</h1>
      <p className={styles.description}>
        Если вам нужна консультация, оставьте сообщение в форме обратной связи или свяжитесь с нами
        через социальные сети.
      </p>
      <br />
      {isLoading ? (
        <div className={styles.spinner}>
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        //TODO сделать нормально через SocialItem
        <ul className={styles.socialsWrapper}>
          {socials?.map((social) => (
            <SocialItem key={social.id} social={social} />
          ))}
        </ul>
        // <ul className={styles.socialsWrapper}>
        //   <li className={vkLogo}>
        //     <a href={socials[0].href} target="_blank" rel="noreferrer">
        //       <img src={socials[0].img} alt={socials[0].alt}></img>
        //     </a>
        //   </li>
        //   <li className={instLogo}>
        //     <a href={socials[1].href} target="_blank" rel="noreferrer">
        //       <img src={socials[1].img} alt={socials[1].alt}></img>
        //     </a>
        //   </li>
        //   <li className={whatsappLogo}>
        //     <a href={socials[2].href} target="_blank" rel="noreferrer">
        //       <img src={socials[2].img} alt={socials[2].alt}></img>
        //     </a>
        //   </li>
        //   <li className={tiktokLogo}>
        //     <a href={socials[3].href} target="_blank" rel="noreferrer">
        //       <img src={socials[3].img} alt={socials[3].alt}></img>
        //     </a>
        //   </li>
        //   <li className={telegramLogo}>
        //     <a href={socials[4].href} target="_blank" rel="noreferrer">
        //       <img src={socials[4].img} alt={socials[4].alt}></img>
        //     </a>
        //   </li>
        //   <li className={youtubeLogo}>
        //     <a href={socials[5].href} target="_blank" rel="noreferrer">
        //       <img src={socials[5].img} alt={socials[5].alt}></img>
        //     </a>
        //   </li>
        // </ul>
      )}
      {/* <Stack direction="horizontal">
    <img className={styles.mail} src={mailLogo} alt="почта"></img>
    <a href="mailto:mail@mail.ru">nekita.lopatin1993@yandex.ru</a>
  </Stack> */}
      <Stack direction="horizontal" className={styles.phoneWrapper}>
        <img className={styles.phone} src={phoneLogo} alt="телефон"></img>
        <a href="tel:+79063111825">+7 906 311 18 25</a>
      </Stack>
      <Stack direction="horizontal" className={styles.phoneWrapper}>
        <img className={styles.phone} src={phoneLogo} alt="телефон"></img>
        <a href="tel:+79111414714">+7 911 141 47 14</a>
      </Stack>
    </Col>
  );
};

export default Socials;
