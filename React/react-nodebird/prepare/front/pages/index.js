import React from 'react'; // Next에서는 쓰지 않아도 된다; pages 폴더를 인식해서 안의 파일들을 개별적인(코드 스플릿팅) 페이지 컴포넌트로 만들어준다
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {/* 포스트카드의 key에 index를 쓰지 말것!!(게시물 삭제, 추가 등이 될때 순서가 뒤죽박죽이 됨) */}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />
        );
      })}
    </AppLayout>
  );
}

export default Home;