const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }
};

const login = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

// 동적 액션, 액션 생성기
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  }
};
changeNickname('서민수');
// {
//   type: 'CHANGE_NICKNAME',
//   data: '서민수'
// }

// store.dispatch(changeNickname('서민수'))

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        }
      };
  }
};

export default rootReducer