import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
       <Button variant="primary">Primary</Button>{' '}
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77qxPgekIxLmKAnyMOhliXrzlZUNwc9JBU49Exv5JxP-Xe--WRxiw10NzvHoz6RroflQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default App;
