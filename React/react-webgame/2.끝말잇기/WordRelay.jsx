const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('서민수');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null)

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
        setResult('딩동댕');
        setWord(value);
        setValue('')
        inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('')
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

    return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
          <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
          <button className="">입력!</button>
        </form>
        <div>{result}</div>
      </>
    );
  };

module.exports = WordRelay; // 쪼갠 컴포넌트를 바깥에서 사용하게 해주는 것