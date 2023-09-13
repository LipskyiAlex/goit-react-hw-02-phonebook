const Contacts = ({ contacts, filter, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts
          .filter(({ contact }) =>
            contact.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, contact, number }) => (
            <li key={id}>
              <p>{contact}</p>
              <p>{number}</p>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
