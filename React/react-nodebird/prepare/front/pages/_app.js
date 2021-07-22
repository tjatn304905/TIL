// AppLayout.js 는 일부가 공유하는 공통 부분이지만 _app.js는 전체가 공유하는 것이다.
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; // next에서는 Head 컴포넌트를 제공한다. 
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore.'

const NodeBird = ({ Component }) => {
  return (
    // next-redux-wrapper에서 알아서 Provider로 감싸준다.
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired, // AppLayout.js 에서는 node 타입을 썼는데, 그것은 elementType, number, string, null 등 모든 것을 넣을 수 있다.
}

export default wrapper.withRedux(NodeBird);