import React from "react";
import {ButtonOnDelete, ContactRow, ContactsList} from "./ContactsEl.styled";


export const ContactsEl = ({data, onDelete}) => {

  // function filteredData () {
  //     if (filter.length > 0) {
  //       return data.filter(dat => dat.name.toLowerCase().includes(filter.toLowerCase().trim()));//todo: refactoring
  //     }
  //     return data;
  //   }

  return (
      <ContactsList>
          {data.map(contact => (
            <ContactRow key={contact.id}>
              {contact.name}: {contact.number}
              <ButtonOnDelete onClick={() => onDelete(contact.id)}>delete</ButtonOnDelete>
            </ContactRow>
            )
          )}
        </ContactsList>

    );
};
