import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Signup = () => {
  return (
    // _app.js의 Head를 덮어씀
    <>
    <Head>
      <title>회원가입 | Nodebird </title>
    </Head>
    <AppLayout>회원가입 페이지</AppLayout>
    </>
  )
};

export default Signup;