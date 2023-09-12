
export const Input = ({name,number,onChange,onSubmit}) => {


return (

<form onSubmit={onSubmit}>
<input
    type="text"
    name="name"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={name}
    onChange={onChange}
  />
  <input
  type="tel"
  name="number"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
  onChange={onChange}
/>
  <button type="submit" >Add to contacts</button>
   </form>)
 

}






// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"    this is for name
// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"  this is for number