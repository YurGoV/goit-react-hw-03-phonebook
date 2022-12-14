import React, { Component } from "react";
import {Section} from "./App.styled";
import {Contacts} from "./Contacts/Contacts";
import {nanoid} from "nanoid";


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson'},
      {id: 'id-2', name: 'Hermione Kline'},
      {id: 'id-3', name: 'Eden Clements'},
      {id: 'id-4', name: 'Annie Copeland'},
    ],
    name: '',
  }

  handleAddContact = (e) => {
    e.preventDefault();
    console.dir(e.currentTarget.elements.name.value);
    const contact = e.currentTarget.elements.name.value;
    const contactId = nanoid();

    this.setState({
      contacts: [...this.state.contacts, {id: contactId, name: contact}],
    })

  }

  addContact = (contact) => {
    this.setState({
      contacts: {id: '111', name: contact},
    })
  }

render () {
    const contacts = this.state.contacts
  // console.log(contacts);
  return (
    <Section>
      <form onSubmit={this.handleAddContact}>
      Phonebook
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button type="text">Add contact</button>
      </form>

      <Contacts data={contacts}></Contacts>

    </Section>
  );
}
};
