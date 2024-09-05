import React from 'react';
import { Follower, MyPagebar, ProfileMenu } from 'components';
import { Container } from 'react-bootstrap';

export default function Mypage() {
  return (
    <div>
      <MyPagebar />
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <ProfileMenu />
          </div>
          <div className="w-4/5">
            <Follower />
          </div>
        </div>
      </Container>
    </div>
  );
}
