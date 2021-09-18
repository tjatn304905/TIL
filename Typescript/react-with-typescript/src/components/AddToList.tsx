import React, { useState } from 'react';
import { IState as Props } from "../App"

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    // return "string"
  }

  const handleClick = (): void => {
    if(
      !input.name || 
      !input.age || 
      !input.img
    ) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ])
  }

  return (
    <div className="AddToList">
      <input 
        type="text" 
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        // inline function에서는 typescript가 함수가 받는 변수의 타입을 잘 알고있다.(위에서 handleChange의 e 타입을 지정하기 위한 팁)
        // onChange={(e) => {}} 
        onChange={handleChange}
        name="name"
      />
      <input 
        type="number" 
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input 
        type="text" 
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea 
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        // textarea는 HTMLTextAreaElement로 지정해줘야 에러가 나지 않는다.
        onChange={handleChange}
        name="note"
      />
      <button
        className="AddToList-btn"
        onClick={handleClick}
      >
        Add to List
      </button>
    </div>
  )
}

export default AddToList;