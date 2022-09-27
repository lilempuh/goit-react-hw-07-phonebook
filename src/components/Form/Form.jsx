// import { useState } from 'react';
import { Forma, Input, Button } from './Form.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, getContacts } from '../redux';
// import shortid from 'shortid';
import { useAddContactMutation, useGetContactsQuery } from '../redux';

export default function Form() {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target.elements;

    const addContactTarget = data.find(
      contact => contact.name.toLowerCase() === form.name.value.toLowerCase()
    );

    if (addContactTarget) {
      alert(`${form.name.value} is already in contacts`);

      return;
    }

    const formDatas = {
      name: form.name.value,
      phone: form.phone.value,
    };

    addContact(formDatas);

    e.target.reset();
  };

  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const form = e.currentTarget.elements;
  //   const addContacts = contacts.find(
  //     contact => contact.name.toLowerCase() === form.name.value.toLowerCase()
  //   );
  //   if (addContacts) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   dispatch(addContact(newContact));
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Forma onSubmit={handleSubmit}>
      <p>Name</p>
      <Input
        type="text"
        // value={name}
        // onChange={handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <p>Number</p>
      <Input
        type="tel"
        // value={number}
        // onChange={handleChange}
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add Contact</Button>
    </Forma>
  );
}
