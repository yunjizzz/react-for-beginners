import {useState, useEffect} from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => console.log('나는 한번만 실행되용'),[]);
  useEffect(() => {
    if(keyword !== '' && keyword.length > 5){
      console.log('나는 키워드가 5단어 이상일 경우 실행되요', keyword);
    }
  },[keyword])
  useEffect(() => {
      console.log('나는 카운트가 변경되면 실행되요');
  },[counter])

  useEffect(() => {
    console.log('나는 카운트랑 키워드가 변경되면 실행되요');
  },[counter, keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...'/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
