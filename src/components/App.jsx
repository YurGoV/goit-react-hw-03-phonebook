import React, {Component} from "react";
import {Section, Title} from "./App.styled";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";


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

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleAddContact}></ContactForm>
        <Filter onSearch={this.handleSearchContacts}></Filter>
        <ContactsList data={contacts} filter={filter}></ContactsList>
      </Section>
    );
  }
};
