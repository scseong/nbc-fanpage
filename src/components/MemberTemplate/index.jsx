import React, { useState } from 'react';
import Member from 'components/Member';
import Letter from 'components/Letter';
import AddLetter from 'components/AddLetter';
import useLocalStorage from 'hooks/useLocalStorage';
import { MEMBERS } from 'constants/member';
import { LettersContext } from 'context/LetterContext';

export default function MemberTemplate() {
  const [memberId, setMemberId] = useState(MEMBERS[0].englishName);
  const [messages, setMessages] = useLocalStorage('message', []);

  const handleUpdate = (member) => setMemberId(member);
  const handleAdd = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <LettersContext.Provider
      value={{ memberId, messages, handleUpdate, handleAdd }}
    >
      <Member />
      <Letter />
      <AddLetter />
    </LettersContext.Provider>
  );
}
