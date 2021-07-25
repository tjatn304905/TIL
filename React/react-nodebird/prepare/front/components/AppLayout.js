import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; // next 자체의 라우터 기능을 하는 링크 컴포넌트
import { Input, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'

// 컴포넌트에 styled를 적용할때는 이런식으로
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({children}) => {
  // redux 설치 후 필요 없어짐
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // redux 사용 시
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn) // 한단계 더 깊이 들어가는 버전
  const { isLoggedIn } = useSelector((state) => state.user)

  return ( 
    <div>
      {/* 링크 컴포넌트 쓰는 법은 다음과 같다 */}
      <Menu mode="horizontal">
        <Menu.Item key="nodebird">
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item key="enterbutton">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      {/* gutter : 컬럼 사이에 간격을 주는 속성 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* { isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />} */}
          { isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          { children }
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/tjatn304905" target="_blank" rel="noreferrer noopener">Made By Sumsoo</a>
        </Col>
      </Row>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;