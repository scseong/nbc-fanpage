import React from 'react';
import styled from 'styled-components';

const StLetter = styled.div`
  display: flex;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 10px;
  }
`;

export default function LetterItem({
  nickname,
  avatar,
  content,
  createdAt,
  id,
}) {
  return (
    <StLetter>
      <img src={avatar} alt="" />
      <div>
        <h4>{nickname}</h4>
        <div>
          <p>{content}</p>
          <span>{new Date(createdAt).toLocaleString().substring(2, 20)}</span>
        </div>
      </div>
    </StLetter>
  );
}
