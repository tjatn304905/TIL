import React from 'react'; // Next에서는 쓰지 않아도 된다; pages 폴더를 인식해서 안의 파일들을 개별적인(코드 스플릿팅) 페이지 컴포넌트로 만들어준다
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  );
}

export default Home;