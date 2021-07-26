export const initialState = {
  // 다른 정보와 합쳐서 주는 애들은 대문자로 하는게 보통임. (db측과 상의)
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '서민수',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://i.picsum.photos/id/767/200/300.jpg?hmac=j5YA1cRw-jS6fK3Mx2ooPwl2_TS3RSyLmFmiM9TqLC4'
    }, {
      src: 'https://i.picsum.photos/id/767/200/300.jpg?hmac=j5YA1cRw-jS6fK3Mx2ooPwl2_TS3RSyLmFmiM9TqLC4'
    }, {
      src: 'https://i.picsum.photos/id/767/200/300.jpg?hmac=j5YA1cRw-jS6fK3Mx2ooPwl2_TS3RSyLmFmiM9TqLC4'
    },
  ],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '얼른 사고싶어요~'
    }, {
      User: {
        nickname: 'hero',
      },
      content: '개정판이 나왔군요'
    }]
  }],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST'; // 변수로 따로 빼주면 오타나 에러잡기가 쉬워짐
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '서민수',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state
  }
};

export default reducer;