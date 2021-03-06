import { HYDRATE } from 'next-redux-wrapper'; // redux 서버 사이드 렌더링 해주는 역할
import { combineReducers } from 'redux'; // reducer를 합쳐주는 역할

import user from './user';
import post from './post';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers ({
  // HYDRATE(서버사이드렌더링)을 위한 리듀서
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action)
        return { ...state, ...action.payload };
      
        default:
          return state;
    }
  },
  user,
  post,
});

export default rootReducer