import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import DisplaySearch from "./DisplaySearch";
import Card from "react-bootstrap/Card";

function PeopleSearch() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("Luke");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/people/", { params: { search: query } })
      .then((response) => {
        setPeople(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      <input
        placeholder="Enter character name"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      ></input>
      <Button
        onClick={() => {
          setQuery(searchValue);
        }}
      >
        Click me
      </Button>
      <div>
      {isLoading ? "Loading ..." : <Card>{people.results.map((peeps) =>{
        return <Card.Body key={peeps.name}>{peeps.name}</Card.Body>
      })}</Card>}
      </div>
    </div>
  );
}

export default PeopleSearch;
