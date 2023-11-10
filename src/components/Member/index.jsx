import React from 'react';
import Polaroid from 'components/Polaroid';
import { MEMBERS } from 'constants/member';
import { StSection } from './styles';

export default function Member() {
  return (
    <StSection>
      <h2>MEMBER</h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {MEMBERS.map((member) => (
          <Polaroid key={member.id}>{member.name}</Polaroid>
        ))}
      </ul>
    </StSection>
  );
}
