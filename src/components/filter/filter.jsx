const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        placeholder="Who are you looking for?.."
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
