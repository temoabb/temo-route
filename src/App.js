import React from 'react';
import './App.css';
import Nav from '../src/Nav.jsx'
import Shop from '../src/Shop.jsx'
import About from '../src/About.jsx'
import ItemDetail from './ItemDetail.jsx'
import Users from '../src/Users.jsx'
import Photos from '../src/Photos.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/users/:albumId/albums" component={Users} />
          <Route path="/albums/:photoId/photos" component={Photos} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  )
}
export default App;
