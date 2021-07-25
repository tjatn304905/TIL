export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '서민수',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: ''
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
}


const ADD_POST = 'ADD_POST'; // 변수로 따로 빼주면 오타나 에러잡기가 쉬워짐
export const addPOST = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: 
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:

    default:
      return state
  }
};

export default reducer;