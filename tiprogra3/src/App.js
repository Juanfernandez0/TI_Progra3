
import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResult";
import VerPopulares from "./pages/VerPopulares";
import VerCartelera from "./pages/VerCartelera";



function App() {
  return (

    <div>
      <Header />


      <Switch>
      <Route path="/Populares" exact component={VerPopulares} />
      <Route path="/Cartelera" exact component={VerCartelera} />
      <Route path="/search" exact component={SearchResults} />
      <Route component={NotFound} />
    </Switch>
  

      <Footer />

    
    </div>

  );
}

export default App;
