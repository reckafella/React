// SearchParams.js
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import { useBreedList, useAnimals } from "./useAnimalAndBreedList";
import SearchForm from "./SearchForm";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  //const [pets, setPets] = useState([]);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [breeds] = useBreedList(animal);
  const ANIMALS = useAnimals()[0];

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <SearchForm
        setRequestParams={setRequestParams}
        animal={animal}
        setAnimal={setAnimal}
        breeds={breeds}
        ANIMALS={ANIMALS}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
