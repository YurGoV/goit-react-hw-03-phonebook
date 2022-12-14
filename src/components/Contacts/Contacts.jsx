import React from "react";
import {Contact, ContactRow, ContactsList, Title} from "./contacts.styled";


export const Contacts = ({data, filter}) => {

  function filteredData () {
      if (filter.length > 0) {
        return data.filter(dat => dat.name.toLowerCase().includes(filter));
      }
      return data;
    }

  return (
      <Contact>
        <Title>Contacts</Title>
        <ContactsList>
          {filteredData().map(contact => (
            <ContactRow key={contact.id}>{contact.name}: {contact.number}</ContactRow>
            )
          )}
        </ContactsList>
      </Contact>
    );
};
