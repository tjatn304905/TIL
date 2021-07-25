import { HYDRATE } from 'next-redux-wrapper'; // redux 서버 사이드 렌더링 해주는 역할
import { combineReducers } from 'redux'; // reducer를 합쳐주는 역할

import user from './user';
import post from './post';

const initialState = {
  user: {

  },
  post: {

  }
};

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers ({
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