import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchFeature.css";

function SearchResults(props) {
  const { people, planets } = props;

  return (
    <div>
      <Card.Title>Testing</Card.Title>
      {people.map((peeps) => {
        return (
          <Card key={peeps.name}>
            <Card.Header>{peeps.name}</Card.Header>
            <ListGroup>
              <ListGroup.Item>Birth Year: {peeps.birth_year}</ListGroup.Item>
              <ListGroup.Item>
                Home world:
                {` ${planets
                  .filter((planet) => {
                    return planet.url === peeps.homeworld;
                  })
                  .map((something) => {
                    return something.name;
                  })}`}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
}

export default SearchResults;
