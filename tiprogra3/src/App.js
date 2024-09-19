
import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResult";
import ver_todas from "./pages/ver_todas";


function App() {
  return (

    <div>
      <Header />


      <Switch>
      <Route path="/ver_todas" exact component={ver_todas} />
      <Route path="/search" exact component={SearchResults} />
      <Route component={NotFound} />
    </Switch>
  

      <Footer />

    
    </div>

  );
}

export default App;
