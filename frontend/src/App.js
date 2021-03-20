import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Welcome from './components/Welcome';
import FruitList from './components/FruitList';
import AddFruit from './components/AddFruit';
import EditFruit from './components/EditFruit';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Welcome} />
      <Route path="/fruitlist" component={FruitList} />
      <Route path="/addfruit" component={AddFruit} />
      <Route path="/fruit/:id" componet={EditFruit} />
    </Router>
  );
}

export default App;
