import React from 'react';
import Scoreboard from './Socreboard';

function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Gif Game</h1>
      <Scoreboard  score={score} bestScore={bestScore} />
    </header>
  );
}

export default Header;