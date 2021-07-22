import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers'

// redux를 쓰는 이유:
// 여러 컴포넌트에서 공통적인 정보가 쓰이는데, 데이터가 흩어지지 않게하려면 부모컴포넌트로부터 자식 컴포넌트로 각각 보내주어야하는데
// 이런 과정이 매우 귀찮기 때문에, 중앙에서 하나로 관리를 하는 저장소 역할을 한다.
// 비동기의 3단계: 데이터 요청, 성공, 실패
// 비동기와 데이터를 중앙에서 관리하면서 컴포넌트는 화면을 그리는 것에 집중하게 해줌.

const configureStore = () => {
  const store = createStore(reducer);
  store.dispatch({
    type: 'CAHNGE_NICKNAME',
    data: 'minsu'
  })
  return store;
};

const wrapper = createWrapper(configureStore, { 
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;