import React from "react";
import {Formik, Form, Field} from 'formik';
// import * as yup from 'yup';
// import "yup-phone";
import {Button, InputField} from "./ContactForm.styled";

const formicInitialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({onSubmit}) => {

  const onFormicSubmit = (values, {resetForm}) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={formicInitialValues}
      // validationSchema={schema}
      onSubmit={onFormicSubmit}
    >
      <Form>
        <InputField>Name
          <Field type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
          />
        </InputField>
        <InputField>Number
          <Field type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
          />
        </InputField>
        <Button type="text">Add contact</Button>
      </Form>
    </Formik>
  );

};


/*
return (
  <form onSubmit={onSubmit}>
    <Field>Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      /></Field>
    <Field>Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      /></Field>
    <Button type="text">Add contact</Button>
  </form>
)*/
