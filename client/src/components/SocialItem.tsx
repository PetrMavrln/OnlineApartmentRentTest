import classNames from 'classnames';
import { ISocial } from '../models/ISocial';
import styles from '../css-modules/contactsPage.module.css';

const SocialItem = ({ social }: { social: ISocial }) => {
  // const vkLogo = classNames(styles.icon, styles.facebook);
  // const instLogo = classNames(styles.icon, styles.instagram);
  // const whatsappLogo = classNames(styles.icon, styles.whatsapp);
  // const tiktokLogo = classNames(styles.icon, styles.tiktok);
  // const telegramLogo = classNames(styles.icon, styles.telegram);
  // const youtubeLogo = classNames(styles.icon, styles.youtube);
  const socialItem = classNames(styles.icon, styles.socialItem);

  return (
    <li className={socialItem}>
      <a href={social.href} target="_blank" rel="noreferrer">
        <img src={social.img} alt={social.alt}></img>
      </a>
    </li>
  );
};

export default SocialItem;
