import React from 'react';
import { StPolaroid } from './styles';

export default function Polaroid({ children: name }) {
  return (
    <StPolaroid>
      <div>
        <img src={require(`assets/${name}.jpg`)} alt={name} />
        <p>{name}</p>
      </div>
    </StPolaroid>
  );
}
