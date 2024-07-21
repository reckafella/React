// SearchParams.js
import { useState, useEffect } from "react";
import Results from "./Results";
import { useBreedList, useAnimals } from "./useAnimalAndBreedList";
import SearchForm from "./SearchForm";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const ANIMALS = useAnimals();

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <SearchForm
        location={location}
        setLocation={setLocation}
        animal={animal}
        setAnimal={setAnimal}
        breed={breed}
        setBreed={setBreed}
        breeds={breeds}
        ANIMALS={ANIMALS}
        requestPets={requestPets}
      />
      <div className="results">
        <Results pets={pets} />
      </div>
    </div>
  );
};

export default SearchParams;
