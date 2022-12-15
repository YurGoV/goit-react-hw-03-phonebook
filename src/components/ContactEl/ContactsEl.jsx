import React from "react";
import {ContactRow, ContactsList} from "./ContactsEl.styled";


export const ContactsEl = ({data, filter}) => {

  function filteredData () {
      if (filter.length > 0) {
        return data.filter(dat => dat.name.toLowerCase().includes(filter));
      }
      return data;
    }

  return (
      <ContactsList>
          {filteredData().map(contact => (
            <ContactRow key={contact.id}>{contact.name}: {contact.number}</ContactRow>
            )
          )}
        </ContactsList>

    );
};
