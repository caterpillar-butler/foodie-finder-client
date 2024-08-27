import React from 'react';
import { useForm } from 'react-hook-form';
import { Follower, MyPagebar, ProfileMenu } from 'components';
import { Container, Row, Col } from 'react-bootstrap';

export default function Mypage() {
  return (
    <div>
      <MyPagebar />
      <Container>
        <Row>
          <Col>
            <ProfileMenu />
          </Col>
          <Col>
            <Follower />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
