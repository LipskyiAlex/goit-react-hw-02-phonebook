


const Contacts = ({contacts}) => {

    return (

      
      <ul>
      {contacts.map(element => (
         
         <li><p>{element.name}</p></li>

      ))}
      </ul>

    )


}

export default Contacts;