const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, contact, number }) => (
        <li key={id}>
          <p>{contact}</p>
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
