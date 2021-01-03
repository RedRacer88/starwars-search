import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function SearchResults(props) {
  const people = props.people;
  return (
    <div>
      <Card.Title>Testing</Card.Title>
      {people.map((peeps) => {
        return (
          <Card key={peeps.name}>
            <Card.Header>{peeps.name}</Card.Header>
            <ListGroup>
              <ListGroup.Item>Birth Year: {peeps.birth_year}</ListGroup.Item>
              <ListGroup.Item>Home world: {peeps.homeworld}</ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
}

export default SearchResults;
