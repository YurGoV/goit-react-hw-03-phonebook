import React from "react";
import {Contact, Title} from "./ContactsList.styled";
import {ContactsEl} from "../ContactEl/ContactsEl";


export const ContactsList = ({data, filter, onDelete}) => {

  function filteredData() {
    if (filter.length > 0) {
      return data.filter(dat => dat.name.toLowerCase().includes(filter.toLowerCase().trim()));//todo: refactoring
    }
    return data;
  }

  if (filteredData().length > 0) {
    return (
      <Contact>
        <Title>Contacts</Title>
        <ContactsEl data={filteredData()} onDelete={onDelete}></ContactsEl>
      </Contact>
    );
  }
  return (
    <Contact>
      <Title>There are no contacts, matching you query (</Title>
    </Contact>
  );


};

