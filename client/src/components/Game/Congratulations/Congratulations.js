import React from 'react';
import styled from 'styled-components';

import { Card, Button } from '../../StyledComponents';

const Container = Card.extend`
  width: 500px;
  height: 260px;
  padding-top: 80px;
`;

const Congratulations = ({ name, playAgain }) => {
  return (
    <Container>
      <h1>We have a WINNER!!</h1>
      <h2>{name} is the new EMPEROR!</h2>
      <br />
      <Button onClick={() => playAgain()}>Play Again</Button>
    </Container>
  );
};

export default Congratulations;
