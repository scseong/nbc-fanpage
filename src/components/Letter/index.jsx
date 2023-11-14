import React, { useEffect, useState } from 'react';
import { MEMBERS } from 'constants/member';
import LetterItem from 'components/LetterItem';
import { H3 } from './styles';

export default function Letter({ memberId }) {
  const memberData = MEMBERS.filter((member) => member.id === memberId)[0];
  const [data, setData] = useState();
  const filterdData = data?.filter((v) => v.writedTo === memberData.koreanName);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('/mock/fakeData.json');
      const res = await data.json();

      setData(res);
    }

    fetchData();
  }, []);

  return (
    <div>
      <H3>To. {memberData.englishName}</H3>
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
    </div>
  );
}
