import {AiFillDelete} from "react-icons/ai";
import {List,Item,Button} from './contacts.styled';

const Contacts = ({ contacts, filter, onDelete }) => {
  return (
    <>
      <List>
        {contacts
          .filter(({ contact }) =>
            contact.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, contact, number }) => (
            <Item key={id}>
              <p>{contact}</p>
              <p>{number}</p>
              <Button type="button" onClick={() => onDelete(id)}>
              <AiFillDelete size={12} />
              </Button>
            </Item>
          ))}
      </List>
    </>
  );
};

export default Contacts;
