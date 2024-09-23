
import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from './components/MovieDetail/MovieDetail';



import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResult";
import VerPopulares from "./pages/VerPopulares";
import VerCartelera from "./pages/VerCartelera";
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';


function App() {
  return (

    <div>
      <Header />


      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Populares" exact component={VerPopulares} />
      <Route path="/Cartelera" exact component={VerCartelera} />
      <Route path="/search" exact component={SearchResults} />
      
      <Route path="/favoritos" exact component={Favoritos}/>
      <Route path="/movies/:id" exact component={MovieDetail} />
      <Route component={NotFound} />
    </Switch>
  

      <Footer />

    
    </div>

  );
}

export default App;
