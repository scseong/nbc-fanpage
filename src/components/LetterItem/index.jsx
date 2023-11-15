import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

export default function LetterItem({
  nickname,
  avatar,
  content,
  createdAt,
  writedTo,
  id,
}) {
  return (
    <S.Letter>
      <Link
        to={{
          pathname: `detail/${id}`,
          state: {
            nickname,
            avatar,
            content,
            createdAt,
            writedTo,
            id,
          },
        }}
      >
        <img src={!avatar ? require(`assets/default.jpg`) : avatar} alt="" />
        <div>
          <h4>{nickname}</h4>
          <div>
            <span title={content}>{content}</span>
            <h5>{new Date(createdAt).toLocaleString().substring(2, 21)}</h5>
          </div>
        </div>
      </Link>
    </S.Letter>
  );
}
