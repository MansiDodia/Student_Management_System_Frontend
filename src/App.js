import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import { Container } from 'react-bootstrap';
import List from './components/List';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container> 
        <Student />  
        <List />
      </Container>
    </div>
  );
}

export default App;
