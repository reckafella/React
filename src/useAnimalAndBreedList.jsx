import { useState, useEffect } from "react";

const localBreedsCache = {};

export function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localBreedsCache[animal]) {
      setBreedList(localBreedsCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localBreedsCache[animal] = json.breeds || [];
      setBreedList(localBreedsCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}

export function useAnimals() {
  const [localAnimalsCache, setLocalAnimalsCache] = useState([]);

  useEffect(() => {
    // Check if the localAnimalsCache is already populated
    if (localAnimalsCache.length === 0) {
      requestAnimalList();
    }

    async function requestAnimalList() {
      const res = await fetch(`http://pets-v2.dev-apis.com/animals`);
      const json = await res.json();
      setLocalAnimalsCache(json.animals || []);
    }
  }, []);

  return localAnimalsCache;
}
