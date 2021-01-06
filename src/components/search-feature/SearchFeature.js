import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import SearchResults from "./SearchResults";

function SearchFeature() {
  // People api
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState("Luke");
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [url, setUrl] = useState("https://swapi.dev/api/people/");

  // Planet api
  const [planets, setPlanets] = useState([]);

  // Disabling Search button to avoid repeated api calls.
  const [fetchPlanets, setFetchPlanets] = useState(false);
  const [searchButtonDisabled, setSearchButtonDisabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url, {
        params: { search: query },
      });
      //console.log(response.data);
      setPeople(response.data.results);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    };
    fetchData();
  }, [query, url]);

  useEffect(() => {
    if (fetchPlanets) {
      const fetchData = async () => {
        const response = await axios.get("http://swapi.dev/api/planets");
        //console.log(response.data);
        setPlanets(
          response.data.results.map((planet) => {
            return { name: planet.name, url: planet.url };
          })
        );
        setFetchPlanets(false);
        setSearchButtonDisabled(false);
      };
      fetchData();
    }
  }, [fetchPlanets]);

  const characterInputRef = useRef();

  return (
    <div>
      <input ref={characterInputRef} placeholder="Enter character name"></input>
      <Button
        onClick={() => {
          if (!fetchPlanets) {
            setSearchButtonDisabled(true);
            setQuery(characterInputRef.current.value);
            setFetchPlanets(true);
          }
        }}
        disabled={searchButtonDisabled}
      >
        Search
      </Button>
      <Button
        onClick={() => {
          if (nextPage) {
            setUrl(nextPage);
          }
        }}
      >
        Next Page
      </Button>
      <Button
        onClick={() => {
          if (previousPage) {
            setUrl(previousPage);
          }
        }}
      >
        Previous Page
      </Button>
      <SearchResults people={people} planets={planets} />
    </div>
  );
}

export default SearchFeature;
