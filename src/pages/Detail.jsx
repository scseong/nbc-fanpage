import useLocalStorage from 'hooks/useLocalStorage';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import DetailLetter from 'components/DetailLetter';

export default function Detail() {
  const { id } = useParams();
  const [messages, setMessages] = useLocalStorage('message', []);

  return (
    <>
      <Header />
      <DetailLetter id={id} messages={messages} setMessages={setMessages} />;
    </>
  );
}
