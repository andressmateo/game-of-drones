import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Register, Game } from '../../containers';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/game" component={Game} />
    </Switch>
  );
};

export default App;
