import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

function PeopleSearch() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("Luke");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/people/", { params: { search: query } })
      .then((response) => {
        setPeople(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [query]);


  return (
    <div>
      <input placeholder="Enter character name" onChange={(e) =>{
          setSearchValue(e.target.value)
      }}></input>
      <Button onClick={() =>{setQuery(searchValue)}}>Click me</Button>
    </div>
  );
}

export default PeopleSearch;
