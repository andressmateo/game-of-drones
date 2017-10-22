import React from 'react';
import styled from 'styled-components';

import { Button } from '../../StyledComponents';

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const Board = ({ player: { name }, options, play }) => {
  return (
    <div>
      <h2>{name}</h2>
      <span>Select your move: </span>
      <OptionsContainer>
        {options.map(option => (
          <Button onClick={() => play(option)} key={option} gray>
            {option}
          </Button>
        ))}
      </OptionsContainer>
    </div>
  );
};

export default Board;
