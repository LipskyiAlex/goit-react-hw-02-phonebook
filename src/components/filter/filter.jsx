

const Filter = ({filter,onChange}) => {


   return (

      <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={filter} onChange={onChange}/>

      </div>

   )


}

export default Filter;