import React from "react";
import {Contact, Title} from "./ContactsList.styled";
import {ContactsEl} from "../ContactEl/ContactsEl";


export const ContactsList = ({data, filter}) => {

  return (
      <Contact>
        <Title>Contacts</Title>
        <ContactsEl data={data} filter={filter}></ContactsEl>
      </Contact>
    );
};
