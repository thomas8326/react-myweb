import React from 'react';
import { useSelector } from 'react-redux';
import DetailHeader from 'src/components/detail-header';
import Sender from 'src/containers/message/sender';
import ReduxStorage from 'src/models/storage';

function ConversationRoom(props: { roomId: string; onBackClick: (id: string) => void }) {
  const roomInfo = useSelector((state: ReduxStorage) => state.rooms.find((room) => room.id === props.roomId));
  const myUserInfo = useSelector((state: ReduxStorage) => state.userInfo);

  return (
    <div className="full-layout flex-col">
      <DetailHeader onBackClick={() => props.onBackClick('')} title={roomInfo!.roomName} />
      <div style={{ flex: 1 }}>123</div>
      <Sender senderId={myUserInfo.userId} />
    </div>
  );
}

export default ConversationRoom;
