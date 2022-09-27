import { Container, TitleOne, TitleTwo } from './App.styled';
import { Section } from 'components/Section/Section.styled';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handlerSubmitChange = (name, number) => {
  //   const addContact = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (addContact) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   setContacts([newContact, ...contacts]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normolizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normolizeFilter)
  //   );
  // };

  // const getDeletContact = ContactListId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== ContactListId)
  //   );
  // };

  return (
    <Container>
      <Section>
        <TitleOne>{'Phonebook'}</TitleOne>
        <Form />
      </Section>

      <Section>
        <TitleTwo>{'Contacts'}</TitleTwo>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
