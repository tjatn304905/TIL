import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginAction } from '../reducers/user';

// styled component
// styled를 적용해서 css 형식으로 만들어줄 수 있음
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  
  // 커스텀 훅
  const [id, onChangeId] = useInput();
  
  // const [id, setId] = useState('');
  
// 컴포넌트에 props로 넘겨주는 함수에는 useCallback을 써줘야 최적화가 됨
// useCallback은 함수를 캐싱
 // const onChangeId = useCallback((e) => {
 //   setId(e.target.value)
 // }, []);

  const [password, onChangePassword] = useInput();
  // const [password, setPassword] = useState('');

  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value)
  // }, []);

  // onFinish에는 이미 preventDefault가 적용되어 있음
  const onSubmitForm = useCallback(() => {
    console.log(id, password)
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  // useMemo를 사용하는 방법
  // useMemo는 값을 캐싱
  // const style = useMemo(() => ({ marginTop: 10}), []); 

  // 리렌더링 시 return 중에서 달라지는 부분을 다시 그린다.
  // {}객체 등은 다른 개체로 인식을 하기때문에 다시 그리게 된다.
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id"  value={id} onChange={onChangeId} required/>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input 
          name="user-password"
          type="password" 
          value={password} 
          onChange={onChangePassword} 
          required
        />
      </div>
      {/* <div style={{ marginTop: 10 }}>  style안에 객체를 넣어주면(인라인 형식) 계속 리렌더링됨*/} 
      {/* <div style={{ style }}> useMemo로 값을 캐싱하는 방법(리렌더링 방지)*/} 
      <ButtonWrapper> 
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default LoginForm;