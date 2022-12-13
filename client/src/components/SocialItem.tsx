import { ISocial } from '../models/ISocial';

const SocialItem = ({ social }: { social: ISocial }) => {
  return (
    <li className={social.title}>
      <a href={social.href} target="_blank" rel="noreferrer">
        <img src={social.img} alt={social.alt}></img>
      </a>
    </li>
  );
};

export default SocialItem;
