
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';





function Player({joueur}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={joueur.imgurl} />
      <Card.Body>
        <Card.Title>{joueur.name}</Card.Title>
        <Card.Text>
        {joueur.team}
        </Card.Text>
        <Card.Text>
        {joueur.nationality}
        </Card.Text>
        <Card.Text>
        {joueur.number}
        </Card.Text>
        <Card.Text>
        {joueur.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;