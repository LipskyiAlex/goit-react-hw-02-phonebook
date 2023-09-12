const Contacts = ({ contacts, filter}) => {
  return (
    <div>
      
      <ul>
        {contacts.filter(({contact}) => contact.toLowerCase().includes(filter.toLowerCase())).map(({ id, contact, number }) => (
          <li key={id}>
            <p>{contact}</p>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
