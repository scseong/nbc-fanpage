import React, { memo, useContext } from 'react';
import { LettersContext } from 'context/LetterContext';
import * as S from './styles';

function MemberList({ children: name, id }) {
  const { memberId, handleUpdate } = useContext(LettersContext);
  const selectMember = () => {
    handleUpdate(id);
  };

  return (
    <S.MemberList onClick={selectMember} $clicked={name === memberId}>
      <div>
        <img src={require(`assets/${name}.jpg`)} alt={name} />
        <p>{name}</p>
      </div>
    </S.MemberList>
  );
}

export default memo(MemberList);
