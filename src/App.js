import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Cusinerecipes from './components/Cusinerecipes/Cuisinerecipes';
import Mealrecipes from './components/Mealrecipes/Mealrecipes';
import Dishrecipes from './components/Dishrecipes/Dishrecipes';
import Resultspage from './components/Resultpage/Resultspage';
import About from './components/About/About';
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  

  return(
    <Router>
     <Route path="/" exact component={Home} />
     <Route path="/about" exact component={About} />
      <Route path="/cusinerecipes" component={Cusinerecipes} />
      <Route path="/mealrecipes" component={Mealrecipes} />
      <Route path="/dishrecipes" component={Dishrecipes} />
      <Route path="/results" component={Resultspage} />



    </Router>
  );
  
}

export default App;
