import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
// import * as yup from 'yup';
// import "yup-phone";
import {Button} from "./ContactForm.styled";

// const formSchema = yup.object({
//   login: yup.string().min(4, 'to short').required('Required'),
//   number: yup.number().min(4, 'to short').required('Required'),
// });
const formicInitialValues = {
  name: '',
  number: '',
};

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <p>{message}</p>}
//     />
//   );
// };

// number: yup.number().required(),


export const ContactForm = ({onSubmit}) => {



  const onFormicSubmit = (values, {resetForm}) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={formicInitialValues}
      // validationSchema={formSchema}
      onSubmit={onFormicSubmit}
    >
      <Form>
        <label>Name
          <Field type="text" name="name"/>
          <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
        </label>
        <label>Number
          <Field type="text" name="number"/>
          <ErrorMessage name="number" render={msg => <div>{msg}</div>} />
        </label>
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
