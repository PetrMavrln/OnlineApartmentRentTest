import { Container, Stack } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Socials from '../components/Socials';
import styles from '../css-modules/contactsPage.module.css';

const Contacts = () => {
  return (
    <Container className={styles.container}>
      <Stack direction="horizontal" className={styles.wrapper}>
        <ContactForm />
        <Socials />
      </Stack>
    </Container>
  );
};

export default Contacts;
