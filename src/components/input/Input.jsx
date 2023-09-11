
export const Input = ({name,onChange,onSubmit}) => {


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
  <button type="submit" >Add to contacts</button>
   </form>)
 

}






// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"