// SearchForm.jsx

const SearchForm = ({
  setRequestParams,
  animal,
  setAnimal,
  breeds,
  ANIMALS,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          location: formData.get("location") ?? "",
          breed: formData.get("breed") ?? "",
        };
        setRequestParams(obj);
      }}
    >
      <label htmlFor="location">
        Location
        <input id="location" name="location" placeholder="Location" />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          value={animal}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
