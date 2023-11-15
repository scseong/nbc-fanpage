import React, { useState } from 'react';
import Member from 'components/Member';
import Letter from 'components/Letter';
import { MEMBERS } from 'constants/member';
import AddLetter from 'components/AddLetter';

export default function MemberTemplate() {
  const [memberId, setMemberId] = useState(MEMBERS[0].id);
  const handleUpdate = (member) => setMemberId(member);

  return (
    <>
      <Member memberId={memberId} onUpdate={handleUpdate} />
      <AddLetter memberId={memberId} />
      <Letter memberId={memberId} />
    </>
  );
}
