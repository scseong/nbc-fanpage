import React, { useContext } from 'react';
import { MEMBERS } from 'constants/member';
import LetterItem from 'components/LetterItem';
import * as S from './styles';
import { LettersContext } from 'context/LetterContext';

export default function Letter() {
  const { memberId, messages } = useContext(LettersContext);

  const memberData = MEMBERS.filter(
    (member) => member.englishName === memberId,
  )[0];
  const filterdData = messages?.filter(
    (v) => v.writedTo === memberData.englishName,
  );

  return (
    <S.Letter>
      <h3>To. {memberData.englishName}</h3>
      {!!filterdData[0] || (
        <S.EmptyLetter>
          <strong>
            No fan letters have been registered yet. Be the star of your first
            fan letter!
          </strong>
        </S.EmptyLetter>
      )}
      {filterdData?.map((item) => {
        const { nickname, avatar, content, writedTo, createdAt, id } = item;
        return (
          <LetterItem
            nickname={nickname}
            avatar={avatar}
            content={content}
            writedTo={writedTo}
            createdAt={createdAt}
            id={id}
            key={id}
          />
        );
      })}
    </S.Letter>
  );
}
