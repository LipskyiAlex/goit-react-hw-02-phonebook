import {AiFillDelete} from "react-icons/ai";
import {FcContacts} from "react-icons/fc";
import {BsTelephoneOutbound} from 'react-icons/bs';
import {List,Item,Button,EmptyList,Contact,Number,Wrapper} from './contacts.styled';

const Contacts = ({ contacts, filter, onDelete }) => {
  return (
    <>
      <List>
        {contacts.length===0 && (<EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>)}
        {contacts
          .filter(({ contact }) =>
            contact.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, contact, number }) => (
            <Item key={id}>
              <Wrapper>
              <FcContacts size={20} />
              <Contact> {contact}</Contact>
              </Wrapper>
              <Wrapper>
              <BsTelephoneOutbound size={20} />
              <Number>{number}</Number>
              </Wrapper>
              <Button type="button" onClick={() => onDelete(id)}>
              <AiFillDelete size={20} />
              </Button>
            </Item>
          ))}
      </List>
    </>
  );
};

export default Contacts;
