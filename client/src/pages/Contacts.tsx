import { Container, Stack } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Socials from '../components/Socials';
import styles from '../css-modules/contactsPage.module.css';
import { Element } from 'react-scroll';

const Contacts = () => {
  return (
    <Element name="contacts">
      <Container className={styles.container}>
        <Stack direction="horizontal" className={styles.wrapper}>
          <ContactForm />
          <Socials />
        </Stack>
      </Container>
    </Element>
  );
};

export default Contacts;
