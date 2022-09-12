import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import styles from '../css-modules/contactsPage.module.css';
import emailjs from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../utils/consts';

const ContactForm = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result: any) => {
        alert('Форма отправлена');
      },
      (error: any) => {
        alert('Произошла ошибка: ' + error.text);
      },
    );
    e.target.reset();
  };

  return (
    <Col md={5}>
      <Form className={styles.form} onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Ваше полное имя" name="user_name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="email" placeholder="Введите почту" name="user_email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Введите сообщение"
            rows={3}
            name="user_message"
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Подтвердить
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
