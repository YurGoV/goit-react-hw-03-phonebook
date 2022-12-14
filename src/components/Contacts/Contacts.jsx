import React from "react";
import {Contact, ContactRow, ContactsList, Title} from "./contacts.styled";


export const Contacts = ({data}) => {
  // const {contacts} = data;
  console.log(data);
  // state = {
  //   contacts: [
  //     {id: 'id-1', name: 'Rosie Simpson'},
  //     {id: 'id-2', name: 'Hermione Kline'},
  //     {id: 'id-3', name: 'Eden Clements'},
  //     {id: 'id-4', name: 'Annie Copeland'},
  //   ],
  //   name: '',
  // }
  //
  // handleAddContact = (e) => {
  //   e.preventDefault();
  //   console.dir(e.currentTarget.elements.name.value);
  // }

  return (
      <Contact>
        <Title>Contacts</Title>
        <ContactsList>
          {data.map(contact => (
            <ContactRow key={contact.id}>{contact.name}</ContactRow>
            ))}
        </ContactsList>
      </Contact>
    );
};
