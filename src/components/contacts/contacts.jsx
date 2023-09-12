


const Contacts = ({contacts}) => {

    return (

      
      <ul>
      {contacts.map(({id,contact}) => (
         
         <li key={id}><p>{contact}</p></li>

      ))}
      </ul>

    )


}

export default Contacts;