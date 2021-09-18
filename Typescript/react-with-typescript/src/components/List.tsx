import React from 'react';
import { IState as IProps } from "../App"

// 부모컴포넌트로부터 import 할 수 있음
// interface IProps {
//   people: {
//     name: string
//     age: number
//     url: string
//     note?: string
//   }[]
// }

// const List = ({ people }: IProps) => { // destructuring 가능
// const List = (props: IProps) => {
const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => { // return type을 지정하지 않으면 void를 return하게 된다.
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt=""/>
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      {/* {people.map(person => {
        return (
          <div>{person.name}</div>
        )
      })} */}
      {renderList()}
    </ul>
  )
}

export default List