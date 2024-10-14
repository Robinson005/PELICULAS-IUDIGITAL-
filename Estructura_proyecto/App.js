import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Genero from './Genero';
import Director from './Director';
import Productora from './Productora';
import Tipo from './Tipo';
import Media from './Media';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="./genero" exact component={Genero} />
        <Route path="./directore" component={Director} />
        <Route path="./productora" component={Productora} />
        <Route path="./tipo" component={Tipo} />
        <Route path="./media" component={Media} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;