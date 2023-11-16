import React, { useState } from 'react';
import styled from 'styled-components';
import cardbg from 'assets/cardbg.jpg';
import { timestampToDate } from 'utils/date';
import { useNavigate } from 'react-router-dom';

export default function DetailLetter({ id, messages, setMessages }) {
  const [isEdit, setIsEdit] = useState(false);
  const { nickname, avatar, content, createdAt, writedTo } = messages.filter(
    (message) => message.id === id,
  )[0];
  const [editContent, setEditConent] = useState(content);
  const navigate = useNavigate();
  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }

    if (window.confirm('수정하시겠습니까?')) {
      setMessages((messages) => {
        const target = messages.filter((message) => message.id === id)[0];
        const copy = messages.filter((message) => message.id !== id);
        target.content = editContent;
        setIsEdit((prev) => !prev);

        return [...copy, target];
      });
    }
  };

  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setMessages((messages) =>
        messages.filter((message) => message.id !== id),
      );
      navigate(-1);
    }
  };

  return (
    <StDetail>
      <StDetailContainer>
        <StDetailHeader>
          <h2>NewJeans</h2>
          <span>No. {id.slice(0, 8)}</span>
        </StDetailHeader>
        <StDetailInfo>
          <StDetailImg>
            <img src={require(`assets/${writedTo}.jpg`)} alt="" />
          </StDetailImg>
          <StDetailDesc>
            <div>
              <h3>닉네임</h3>
              <p>{nickname}</p>
            </div>
            <div>
              <h3>작성일</h3>
              <p>{timestampToDate(createdAt)}</p>
            </div>
            <div>
              <h3>내용</h3>
            </div>
            <div>
              {isEdit ? (
                <textarea
                  cols="30"
                  rows="6"
                  value={editContent}
                  onChange={(e) => setEditConent(e.target.value)}
                />
              ) : (
                <p>{content}</p>
              )}
            </div>
          </StDetailDesc>
        </StDetailInfo>
        <StDetailBtnBox>
          <StDetailBtn onClick={handleEdit} type={isEdit ? 'edit' : 'default'}>
            {isEdit ? '완료' : '수정'}
          </StDetailBtn>

          {!isEdit ? (
            <StDetailBtn onClick={handleDelete} type="delete">
              삭제
            </StDetailBtn>
          ) : undefined}
        </StDetailBtnBox>
      </StDetailContainer>
    </StDetail>
  );
}

const StDetail = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StDetailContainer = styled.div`
  position: relative;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background: url(${cardbg});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;

const StDetailHeader = styled.header`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;

  h2 {
    font-size: 2rem;
  }
`;

const StDetailInfo = styled.div`
  display: flex;
  width: 60vw;
`;
const StDetailImg = styled.div`
  img {
    border: 1px solid #000;
  }
`;
const StDetailDesc = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #000;
    line-height: 2rem;
  }

  div:last-child {
    flex-grow: 2;
    max-width: 60vw;
    p {
      width: 100%;
      word-break: break-all;
    }
    textarea {
      padding: 1rem 0.1rem;
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.4rem;
      resize: none;
      word-break: break-all;
    }
  }
`;

const StDetailBtnBox = styled.div`
  text-align: end;
`;

const StDetailBtn = styled.button`
  padding: 5px;
  border: 1px solid #000;
  font-size: 1.2rem;
  background-color: ${(props) => TYPE[props.type]};
  cursor: pointer;
`;

const TYPE = {
  edit: '#04AA6D',
  delete: '#f44336',
  default: 'white',
};
