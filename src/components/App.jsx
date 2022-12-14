import React, {Component} from "react";
import {Field, Section, Title} from "./App.styled";
import {Contacts} from "./Contacts/Contacts";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleAddContact = (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const id = nanoid();

    this.setState({
      contacts: [...this.state.contacts, {
        id,
        name,
        number,
      }],
    })
  };

  handleSearchContacts = (e) => {
    // console.log(e.currentTarget.value)
    this.setState({
      filter: e.currentTarget.value,
    })
  }

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    // console.log(contacts);
    return (
      <Section>
        <form onSubmit={this.handleAddContact}>
          <Title>Phonebook</Title>
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
          <button type="text">Add contact</button>
        </form>

        <Filter onSearch={this.handleSearchContacts}></Filter>

        <Contacts data={contacts} filter={filter}></Contacts>

      </Section>
    );
  }
};
