// SearchForm.jsx

const SearchForm = ({
  location,
  setLocation,
  animal,
  setAnimal,
  breed,
  setBreed,
  breeds,
  ANIMALS,
  requestPets,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
      <label htmlFor="location">
        Location
        <input
          id="location"
          name="location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
          placeholder="Location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
            setBreed("");
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
        <select
          id="breed"
          name="breed"
          disabled={breeds.length === 0}
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
          value={breed}
        >
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
