import classNames from 'classnames';
import React from 'react';
import { Col, Stack } from 'react-bootstrap';
import styles from '../css-modules/contactsPage.module.css';
import vkLogo from '../assets/contacts/vkLogo.svg';
import instLogo from '../assets/contacts/instLogo.svg';
import mailLogo from '../assets/contacts/mailLogo.svg';
import phoneLogo from '../assets/contacts/phoneLogo.svg';
import whatsappLogo from '../assets/contacts/whatsappLogo.svg';
import tiktokLogo from '../assets/contacts/tiktokLogo.svg';
import telegramLogo from '../assets/contacts/telegramLogo.svg';

const Socials = () => {
  let iconFb = classNames(styles.icon, styles.facebook);
  let iconInst = classNames(styles.icon, styles.instagram);
  let iconWhatsapp = classNames(styles.icon, styles.whatsapp);
  let iconTiktok = classNames(styles.icon, styles.tiktok);
  let iconTelegram = classNames(styles.icon, styles.telegram);

  return (
    <Col md={7} className={styles.col}>
      <h1>Будьте на связи</h1>
      <p className={styles.description}>
        Если вам нужна консультация, оставьте сообщение в форме обратной связи или свяжитесь с нами
        через социальные сети.
      </p>
      <br />
      <ul className={styles.socialsWrapper}>
        <li className={iconFb}>
          <a href="https://vk.com/club216604382" target="_blank" rel="noreferrer">
            <img src={vkLogo} alt="VK"></img>
          </a>
        </li>
        <li className={iconInst}>
          <a
            href="https://instagram.com/kds_posutka?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer">
            <img src={instLogo} alt="Inst"></img>
          </a>
        </li>
        <li className={iconWhatsapp}>
          <a
            href="https://api.whatsapp.com/send?phone=79063111825"
            target="_blank"
            rel="noreferrer">
            <img src={whatsappLogo} alt="Whatsapp"></img>
          </a>
        </li>
        <li className={iconTiktok}>
          <img src={tiktokLogo} alt="Tiktok"></img>
        </li>

        <li className={iconTelegram}>
          <a href="https://t.me/Nikita_Lopatin" target="_blank" rel="noreferrer">
            <img src={telegramLogo} alt="Telegram"></img>
          </a>
        </li>
      </ul>
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
