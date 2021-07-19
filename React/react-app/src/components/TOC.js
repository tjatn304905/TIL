import React, { Component } from 'react';

class TOC extends Component {
  // 이 컴포넌트가 렌더링을 할 지 말지 결정하는 함수
  shouldComponentUpdate(newProps, newState){ // 두가지 매개변수를 받아옴
    console.log('===>TOC render shouldComponentUpdate'
    ,newProps.data // 바뀐 값
    ,this.props.data // 이전 값
    // 바뀐 값과 이전 값을 비교하기 위해서 state의 원본이 아니라 복제본으로 바꾸라는 것임
    );
    if(this.props.data === newProps.data){
      return false;
    }
    return true; // true면 render 호출, false면 render 호출 X
  }
  render() {
    console.log('===>TOC render')
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            // data-id={data[i].id} // 1.데이터 속성을 이용하지 않는다면
            onClick={function(id, e){ // 3.그러면 이 함수에서 첫번째 인자로 받아온다.
              e.preventDefault();
              // this.props.onChangePage(e.target.dataset.id);
              this.props.onChangePage(id);
            }.bind(this, data[i].id)} // 2.bind의 두번째 인자로 넣어준다.
          >{data[i].title}</a>
        </li>);
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;