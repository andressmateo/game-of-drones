import React from 'react';

const Board = ({ player: { name }, options, play }) => {
  return (
    <div>
      <h3>{name}</h3>
      <br />
      {options.map(option => (
        <button onClick={() => play(option)} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Board;

/*
{game:{
    turns:[
      {
        move1:"",
        move2:"",
        winner:"",
        isOver
      }
    ],
    winner:"",
    isOver:""
}};

{ move: "paper", kills: "rock"},
{ move: "rock", kills: "scissors"},
{ move: "scissors", kills: "paper"}
*/
