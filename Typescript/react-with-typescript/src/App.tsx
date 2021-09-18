import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  // 타입스크립트의 역할 간단한 설명

  // 예시 1)
  // const [number, setNumber] = useState(5); // useState를 처음 선언하는 순간부터 type이 정해지는구나!(type inferrence)
  // const [number, setNumber] = useState<number | string>(5);
  // const [number, setNumber] = useState<number>(5); // 이렇게 지정해줘도 되고, 위에처럼 type inferrence에 맡겨도 된다

  // const changeNumber = () => {
  //   setNumber("10") // not assignable
  // }


  // 예시 2)
  // const [people, setPeople] = useState([
  //   {
  //     name: "Lebron James",
  //     url: "",
  //     age: 36,
  //     note: "Allergic to staying on the same team"
  //   },
  //   {
  //     name: "Kobe Bryant",
  //     url: "",
  //     age: 36
  //   }
  // ])

  // people.map(person => {
  //   person.height // error
  //   person.age = "45" // error
  // })


  // 타입을 <>안에 일일이 지정해 주는 것 보다는 interface를 사용해서 지정해주는 것이 좋다.
  // const [people, setPeople] = useState<{age: number, name: string}[]>([])

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://img.sbs.co.kr/newimg/news/20180929/201233203_1280.jpg",
      age: 36,
      note: "Allergic to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      {/* List component는 아직 어떠한 props도 받도록 지정되지 않았기 때문에 에러가 난다.*/}
      {/* <List people={people}/> */}
      {/* List component에서 IProps를 정의해주면 에러가 사라진다 */}
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
