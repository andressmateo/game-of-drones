import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Register, Game, PlayersList } from '../../containers';

const Title = styled.div`
  text-align: center;
  width: 100%;
  height: 200px;
  padding-top: 100px;
  font-size: 70px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <div>
      <Title>GAME OF DRONES</Title>
      <Container>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/game" component={Game} />
          <Route path="/players" component={PlayersList} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
