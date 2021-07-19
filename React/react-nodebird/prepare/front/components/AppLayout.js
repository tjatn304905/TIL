import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; // next 자체의 라우터 기능을 하는 링크 컴포넌트
import { Menu } from 'antd';


const AppLayout = ({children}) => {
  return ( 
    <div>
      {/* 링크 컴포넌트 쓰는 법은 다음과 같다 */}
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;