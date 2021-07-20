import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this) // 생성자에서 한번 바인딩 하면 뒤에서는 안해도 된다.
  }

  inputFormHandler(e){
    debugger;
    this.setState({[e.target.name]:e.target.value}); // 타깃의 네임 값이 들어옴, 여기서는 title과 desc
  }

  render() {
    console.log(this.props.data);
    console.log('UpdateContent render');
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){ // submit을 하면 위 함수가 실행됨. 여기서는 화면 전환을 막기 위한 용도
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        > 
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title} // props로 받아오면 read only이기 때문에 value값으로 지정하면 오류, 그래서 state로 만들어준다.
              onChange={this.inputFormHandler} // input의 값이 바뀌었을때 state도 변화해야 함. onChange로 해줘야 렌더링됨
            ></input>
          </p>
          <p>
            <textarea
              onChange={this.inputFormHandler}
              name="desc" 
              placeholder="description" 
              value={this.state.desc}// html처럼 보이지만 사실 react가 html로 바꿔주는 것이다.
                                     // textarea 태그 안이 아니라 value 속성으로 디폴트값을 넣어줘야한다.
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent