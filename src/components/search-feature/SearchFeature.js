import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchResults from "./SearchResults";

function SearchFeature() {
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState("Luke");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://swapi.dev/api/people/", {
        params: { search: query },
      });
      console.log(response.data);
      setPeople(response.data.results);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Enter character name"
      ></input>
      <Button
        onClick={() => {
          setQuery(searchValue);
        }}
      >
        Search
      </Button>
      <SearchResults people={people} />
    </div>
  );
}

export default SearchFeature;
