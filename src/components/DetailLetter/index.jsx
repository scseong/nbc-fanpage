import React, { useState } from 'react';
import { timestampToDate } from 'utils/date';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function DetailLetter({ id, messages, setMessages }) {
  const [isEdit, setIsEdit] = useState(false);
  const { nickname, content, createdAt, writedTo } = messages?.filter(
    (message) => message.id === id,
  )[0];
  const [editContent, setEditContent] = useState(content);
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }

    if (content === editContent) {
      window.alert('변경 사항이 없습니다.');
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
      navigate('/');
    }
  };

  const handleChangeContent = (e) => {
    if (e.target.value.length > 100) {
      alert('over 100 characers');
      return;
    }
    setEditContent(e.target.value);
  };

  return (
    <S.Detail>
      <S.DetailContainer>
        <S.DetailHeader>
          <h2>NewJeans</h2>
          <span>No. {id.slice(0, 8)}</span>
        </S.DetailHeader>
        <S.DetailInfo>
          <S.DetailImg>
            <img src={require(`assets/${writedTo}.jpg`)} alt="" />
          </S.DetailImg>
          <S.DetailDesc>
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
                  maxLength="100"
                  value={editContent}
                  onChange={handleChangeContent}
                />
              ) : (
                <p>{content}</p>
              )}
            </div>
          </S.DetailDesc>
        </S.DetailInfo>
        <S.DetailBtnBox>
          <S.DetailBtn onClick={handleEdit} type={isEdit ? 'edit' : 'default'}>
            {isEdit ? '완료' : '수정'}
          </S.DetailBtn>
          {!isEdit ? (
            <S.DetailBtn onClick={handleDelete} type="delete">
              삭제
            </S.DetailBtn>
          ) : undefined}
        </S.DetailBtnBox>
      </S.DetailContainer>
    </S.Detail>
  );
}
