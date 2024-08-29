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
          <Col md={3}>
            <ProfileMenu />
          </Col>
          <Col md={9}>
            <Follower />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
